import React from 'react';
import Overview from '../Overview';
import StaticInfoDisplay from '../controlPanel/StaticInfoDisplay';
import StyleSelector from '../controlPanel/StyleSelector';
import ButtonPanel from '../controlPanel/ButtonPanel';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from '../../App';
import ImageGallery from '../imageGallery/ImageGallery';
import axios, { AxiosResponse } from 'axios';
import { camoOnesie, camoOnesieStyles, outOfStockProductStyles,
         fakeProductStyles, camoOnesieMetadata } from './fixtures.js';


//don't totally understand this yet but need it to mock axios for tests
//that involve APIs
// module.jest.mock('axios');
// const mockedAxios = axios;


//Product Information Tests
describe('StaticInfoDisplay should display info for currently selected product and style', () => {

  beforeEach(() => {
    render (
      <StaticInfoDisplay product={camoOnesie}
                         currentStyle={camoOnesieStyles.results[2]}
                         reviews={camoOnesieMetadata}/>
      )
  })

  test('Item category and name should be derived from product object', () => {


      expect(screen.getByRole('heading', {level: 3})).toHaveTextContent('Jackets');
      expect(screen.getByRole('heading', {level: 2})).toHaveTextContent('Camo Onesie');
  });

  test('Should display sale price if not null', () => {
    expect(screen.getByText('$100.00', {exact: false})).toBeInTheDocument();
  });

});

describe('StyleSelector should display available styles and selected style', () => {
    beforeEach( () => {
      render (
        <StyleSelector styles={camoOnesieStyles}
                       currentStyle={camoOnesieStyles.results[0]}/>
      )
    });

    test('Should display the proper number of styles for a product', () => {
      expect(screen.getAllByRole('img')).toHaveLength(6);
    });

    test('Should display the currently selected style', () => {
      expect(screen.getAllByRole('img')[0]).toHaveClass('selected');
    })
})

describe('ButtonPanel should allow the user to select size, quantity, and add to cart', () => {


  test('By default, size selector should display "Select Size"', () => {
    render (
      <ButtonPanel skus={Object.keys(camoOnesieStyles.results[2].skus)}
                   currentStyle={camoOnesieStyles.results[2]} />
    )

    expect(screen.getByDisplayValue('Select Size')).toBeInTheDocument();
  })

  test('Only sizes that are available should appear in the size selector', () => {
    render (
      <ButtonPanel skus={Object.keys(camoOnesieStyles.results[0].skus)}
                   currentStyle={fakeProductStyles.results[0]} />
    )

    expect(screen.queryByDisplayValue('L')).toBe(null);
  });

  test('size selector should read "OUT OF STOCK" and be deactivated if no stock left in current style', async () => {
    render (
      <ButtonPanel skus={Object.keys(outOfStockProductStyles.results[0].skus)}
                   currentStyle={outOfStockProductStyles.results[0]} />
    )

    expect(screen.getByDisplayValue('OUT OF STOCK')).toBeInTheDocument();
    expect(screen.getByDisplayValue('OUT OF STOCK')).toBeDisabled();
  });


  test('By default, quantity dropdown should display "-" and be disabled', () => {
    render (
      <ButtonPanel skus={Object.keys(camoOnesieStyles.results[0].skus)}
                   currentStyle={fakeProductStyles.results[0]} />
    )

    expect(screen.getByDisplayValue('-')).toBeInTheDocument();
    expect(screen.getByDisplayValue('-')).toBeDisabled();
  })

  test('Once size is selected, quantity dropdown should display "1"', async () => {
    render (
      <ButtonPanel skus={Object.keys(camoOnesieStyles.results[0].skus)}
                   currentStyle={fakeProductStyles.results[0]} />
    )
    const user = userEvent.setup();

    await userEvent.selectOptions(screen.getByDisplayValue('Select Size'), 'S');
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
  })

  test('Quantity dropdown should display integers ranging from 1 to maximum stock, capped at 15', async () => {
    render (
    <ButtonPanel skus={Object.keys(camoOnesieStyles.results[0].skus)}
                 currentStyle={camoOnesieStyles.results[0]} />
    )

    const user = userEvent.setup();
    await userEvent.selectOptions(screen.getByDisplayValue('Select Size'), 'S');

    for (let i = 1; i <= 15; i++) {
      expect(screen.getByRole('option', {name: `${i}`})).toBeInTheDocument();
    }
    expect(screen.queryByRole('option', {name: '16'})).toBeNull();

  });


  test('Add to cart button should prompt user to select size if no size selected', async () => {
    render (
      <ButtonPanel skus={Object.keys(camoOnesieStyles.results[0].skus)}
                   currentStyle={camoOnesieStyles.results[0]} />
      )

      const user = userEvent.setup();
      await userEvent.click(screen.getByText('Add To Bag'));

      expect(screen.getByText('Please select size')).toBeInTheDocument();
  });

  test('Add to cart button should not appear if item is out of stock', () => {
    render (
      <ButtonPanel currentStyle={outOfStockProductStyles.results[0]}
                   skus={Object.keys(outOfStockProductStyles.results[0].skus)} />
    )

    expect(screen.queryByDisplayValue('Add To Bag')).toBe(null);
  });

  test('Add to cart button should add items to cart if size is selected', () => {
    //Hold off on implementing this one until we know we're going to have a cart
    //UPDATE: yeah, this isn't happening
  })

});

describe('Image gallery should display images of product', () => {

  test('Images displayed should correspond to currently selected style', () => {
    render (
      <ImageGallery style={camoOnesieStyles.results[0]}
                        imageExpanded={false}
                        toggleExpanded={() => {}}/>
    )
    const mainImage = document.getElementsByClassName('big-image')[0];

    expect(mainImage).toHaveAttribute('src', camoOnesieStyles.results[0].photos[0].url);
  })
  //need to learn how to mock API calls from within react components to make this one work
  xtest('Choosing a new style will update images to correspond to new style', async () => {
    render (
      <Overview currentProductID={camoOnesie.id}
                currentProductData={camoOnesie}
                productMetaData={camoOnesieMetadata} />
    )

    const user = userEvent.setup();
    const secondStyle = await document.getElementsByClassName('circle')[1];
    await userEvent.click(secondStyle);

    const mainImage = document.getElementsByClassName('big-image')[0];
    console.log(typeof mainImage);
    expect(mainImage).toHaveAttribute('src', camoOnesieStyles.results[1].photos[0].url)
  })

  test('Carousel controls will allow customers to browse between photos', async () => {
    render (
      <ImageGallery style={camoOnesieStyles.results[0]}
                        imageExpanded={false}
                        toggleExpanded={() => {}}/>
    )

    const upArrow = document.getElementsByClassName('up')[0];
    const downArrow = document.getElementsByClassName('down')[0];
    const user = userEvent.setup();
    await userEvent.click(downArrow);
    await userEvent.click(downArrow);
    await userEvent.click(upArrow);
    const thumbnail = document.querySelectorAll('div.box > img')[0];

    expect(thumbnail).toHaveAttribute('src', camoOnesieStyles.results[0].photos[1].thumbnail_url);

  })

  test('Image gallery controls will allow customers to zoom in on photos', async () => {
    render (
      <ImageGallery style={camoOnesieStyles.results[0]}
                        imageExpanded={true}
                        toggleExpanded={() => {}}/>
    );
    const mainImage = document.getElementsByClassName('big-image')[0];
    const user = userEvent.setup();
    await userEvent.click(mainImage);

    expect(mainImage).toHaveClass('zoomed');

  })

  xtest('Image gallery will expand view when expand view button is pressed', () => {
    //TODO
  })

  xtest('By default the first image will be displayed', () => {
    //TODO
  })

  xtest('The image displayed will correspond to the highlighted thumbnail', () => {
    //TODO
  })

  xtest('the index of the currently selected image will persist when the gallery changes style', () => {
    //TODO
  })

  xtest('clicking a thumbnail should update the selected image to match', () => {
    //TODO
  })

  xtest('up to 7 thumbnails will be displayed at a time in thumbnail list', () => {
    //TODO
  })

  xtest('Customers should be able to change image by clicking on the arrows to either side of gallery', () => {
    render (
      <ImageGallery style={camoOnesieStyles.results[0]}
                        imageExpanded={true}
                        toggleExpanded={() => {}}/>
    );

    const user = userEvent.setup();
    const left = document.getElementsByClassName('left')[0];
    const right = document.getElementsByClassName('right')[0];

    userEvent.click(right);
    userEvent.click(right);
    userEvent.click(left);

    const mainImage = document.getElementsByClassName('big-image')[0];
    expect(mainImage).toHaveAttribute('src', camoOnesieStyles.results[0].photos[1].url);

  })

  xtest('Clicking on the image gallery should change it to expanded view', () => {
    //TODO
  })

  xtest('clicking on the image in expanded view should zoom the image by 2.5x', () => {
    //TODO
  })

  xtest('moving the mouse around in zoomed view should move the zoomed view', () => {
    //TODO -- IDK how to test this.
  })

  xtest("clicking on the zoomed view should return the view to regular expanded view", () => {
    //TODO
  })
})