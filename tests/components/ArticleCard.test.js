import React from 'react';
import { shallow } from 'enzyme';
import ArticleCard from '../../components/articles/ArticleCard';

const mockProps = {
  article: {
    id: 'abc123',
    title: 'Mock article',
    description: 'This is a mock article',
    photos: [{files: {medium: 'http://photo-url'}}],
    location: {town: "Edinburgh"},
    collection_notes: 'Please collect asap!',
    expiry: new Date(),
  },
  isViewed: false,
  isSelected: false,
  setSelectedArticle: false,
};

describe('ArticleCard Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ArticleCard {...mockProps} />);
  })

  describe('Initial state', () => {
    it('renders without crashing', () => {
      expect(wrapper.length).toEqual(1);
    });
  
    it('renders 3 divs with the expected classNames', () => {
      const divWrapper = wrapper.find('div');
  
      expect(divWrapper).toHaveLength(3);
      expect(divWrapper.at(0).props().className).toEqual('card');
      expect(divWrapper.at(1).props().className).toEqual('columnLeft');
      expect(divWrapper.at(2).props().className).toEqual('columnRight');
    });
  
    it('renders an image with the correct url', () => {
      const imgWrapper = wrapper.find('img');
  
      expect(imgWrapper).toHaveLength(1);
      expect(imgWrapper.props().src).toEqual('http://photo-url');
    });
  
    it('renders the item title and description', () => {
      const titleWrapper = wrapper.find('h3');
      const descriptionWrapper = wrapper.find('p');
  
      expect(titleWrapper).toHaveLength(1);
      expect(titleWrapper.text()).toEqual(mockProps.article.title);
  
      expect(descriptionWrapper).toHaveLength(1);
      expect(descriptionWrapper.text()).toEqual(mockProps.article.description);
    });  
  });

  describe('Article is selected', () => {
    const newProps = {
      ...mockProps,
      isSelected: true,
    };

    const {
      location,
      collection_notes,
      expiry,
    } = mockProps.article;
  
    it('renders an additional div', () => {
      const wrapper = shallow(<ArticleCard {...newProps} />);
      const divWrapper = wrapper.find('div');
  
      expect(divWrapper).toHaveLength(4);
      expect(divWrapper.at(0).props().className).toEqual('cardexpanded');
      expect(divWrapper.at(3).props().className).toEqual('expandedContent');
  
      const textWrapper = divWrapper.at(3).find('p');

      expect(textWrapper).toHaveLength(3);
      wrapper.debug(textWrapper)
      expect(textWrapper.at(0).text()).toEqual(`Location: ${location.town}`);
      expect(textWrapper.at(1).text()).toEqual(`Collection notes: ${collection_notes}`);
      expect(textWrapper.at(2).text()).toEqual(`Expiry: ${new Date(expiry).toLocaleDateString('en-GB')}`);
    });
  });

  describe('Article has been viewed', () => {
    const newProps = {
      ...mockProps,
      isViewed: true,
    };
  
    it('renders an additional div', () => {
      const wrapper = shallow(<ArticleCard {...newProps} />);
      const divWrapper = wrapper.find('div');
  
      expect(divWrapper.at(0).props().className).toEqual('cardviewed');
    });
  });  
});
