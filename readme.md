/ FEC-2212 Team Thor        \\\
\ official documentation   /
  ----------------------------------------
         \   ^__^ 
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||



FEC -- TEAM THOR
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


### Ratings & Reviews
The Ratings and Reviews widget contains a breakdown of the rating information for each individual product and a reviws section that allows the user to view and sort through the available reviews for a product. 

The Ratings Panel includes: an average rating for the product, the percentage of reviewers that recommend the product, a breakdown of all star ratings and the percentage of the overall rating they represent, and a visual representation of the characteristiscs available to be reviewed on the product. 

The Ratings Panel includes: 2 reviews on page load sorted by default by relevance, a sort method selector, and two buttons allowing the user to add more reviews, 2 at a time, to the reviews section or write their own reviews. 

Clicking on the "More Reviews" button will add 2 reviews to the reviews section at a time. 

Clicking on the star ratings, will cause the reviews panel to display only the stars with that rating. These filters are additive and the user can click multiple to view any combination of the reviews available. 

Clicking the filter a second time on the star rating will remove the rating clicked. 

Clicking on a star rating when only that rating is being displayed will reset the review panel to all ratings. 

<img src="https://recordit.co/gZuwog4H4K"/>

Clicking on the sort method at the top of the review panel allows the user to select from 3 sort options for the reviews: relevance, most recent, and helpfulness.

Clicking on "Yes" at the bottom of a review next to the "Helpful?" question will mark it as helpful.

Clicking on "Report" at the bottom of a review will cause that review to be removed from the page and it will not be re-rendered in any subsequent page-reloads or filters. 

<img src="https://recordit.co/WUvjyNL4DW"/>

Clicking on the "Add a Review +" button will open a modal that allows the user to fill out a review for the current product. This modal renders a form and conditionally renders product characteristics that are avaialble to be reviewed, these include: Comfort, Size, Quality, Fit, Witdth, and Length. 

<img src="https://recordit.co/TOvblg3W4d"/>



