Atelier Innovations - The Thor Store
================
- Bryce Anderson
- Thomas Faddegon
- Deirdre Loyall

## Table of Contents
- Design Specifications
- Overview and Demos
  - Overview
  - Related Products
  - Ratings & Reviews

## Design Specifications
<img src="./doc/images/fec_overview.png" />
<img src="./doc/images/fec_related.png" />
<img src="./doc/images/fec_reviews.png" />
<img src="./doc/images/fec_compare_modal.png" />


## Overview and Demos

### Product Overview

The Product Overview widget contains information about the selected product, as well as a gallery of images.

Users can manipulate the image gallery component with either of the image carousel controls.
<img src="http://g.recordit.co/yPnYLK8IIH.gif" />
Clicking on the image gallery will morph the gallery into expanded view.

Clicking once more will enter zoom view, which hides the controls and allows the user to pan around the image at 2.5 zoom. Clicking on the image while in zoom view will cause it to revert back to expanded view.

Clicking on the expand icon while in expanded view will revert the view to default.

Cliking on a style icon will cause the style name, price, and image gallery to update according to the style selected.
<img src="http://g.recordit.co/zsR9m8Qq3g.gif" />
Attempting to add an item to cart without selecting a size or quantity will result message appearing instructing the user to select a size.

The quantity and size dropdowns populate based on available stock, capped at 15 per product.


### Related Products

This section consists of 2 carousels of cards. The first carousel is of products related to currently selected product. There can only be 4 cards in the carousel, so if there are more than 4 related products we see conditionally rendered arrows that let the user scroll back and forth between them.

<img src="http://g.recordit.co/pvDlwAdiYQ.gif" />

Clicking on a product card brings you to that product page and resets the carousel with the new related products. You can also press the compare button to launch a comparison modal, which compares all features from both products.


<img src="http://g.recordit.co/oqVJTm2Oy2.gif" />

The second carousel is the outfit carousel, which is unique to each user. The card on the left lets the user bookmark the current product and add it to their outfit, and that bookmark is then saved in local storage. You also can’t add a bookmark more than once, and an error will flash if you do.


### Ratings & Reviews

The Ratings and Reviews widget contains a breakdown of the rating information for each individual product and a reviws section that allows the user to view and sort through the available reviews for a product.

The Ratings Panel includes: an average rating for the product, the percentage of reviewers that recommend the product, a breakdown of all star ratings and the percentage of the overall rating they represent, and a visual representation of the characteristiscs available to be reviewed on the product.

The Ratings Panel includes: 2 reviews on page load sorted by default by relevance, a sort method selector, and two buttons allowing the user to add more reviews, 2 at a time, to the reviews section or write their own reviews.

Clicking on the "More Reviews" button will add 2 reviews to the reviews section at a time. 

Clicking on the star ratings, will cause the reviews panel to display only the stars with that rating. These filters are additive and the user can click multiple to view any combination of the reviews available. 

Clicking the filter a second time on the star rating will remove the rating clicked.

Clicking on a star rating when only that rating is being displayed will reset the review panel to all ratings.

<img src="http://g.recordit.co/gZuwog4H4K.gif"/>

Clicking on the sort method at the top of the review panel allows the user to select from 3 sort options for the reviews: relevance, most recent, and helpfulness.

Clicking on "Yes" at the bottom of a review next to the "Helpful?" question will mark it as helpful.

Clicking on "Report" at the bottom of a review will cause that review to be removed from the page and it will not be re-rendered in any subsequent page-reloads or filters. 

<img src="http://g.recordit.co/WUvjyNL4DW.gif"/>

Clicking on the "Add a Review +" button will open a modal that allows the user to fill out a review for the current product. This modal renders a form and conditionally renders product characteristics that are avaialble to be reviewed, these include: Comfort, Size, Quality, Fit, Witdth, and Length. 

<img src="http://g.recordit.co/TOvblg3W4d.gif"/>



