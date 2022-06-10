# CSS Terms

- box
  - margin adds transparent space around the box
  - border is inbetween margin and padding
  - padding extends the background color/image
  - content is specified by height and width 
- block
- flex
  - meant to adjust in size based on content
  - content flows in the flex direction (main axis)
  - cross axis is perpendicular to the main axis
  - wrap will stack multiple main axes going in the direction of the cross axis instead of overflowing
  - when wrapping, the align-content property will space out the main axes, align items will shift the solo main axis

### specificity

## selectors
- id
- class name
- type
  - `a` will apply that css to all anchors
- attribute
  - with this you can specify `a[href="google.com"]` to attach that css to all anchors with a reference to google

Let `A` and `B` be selectors. `A B` specifies that `B` must be a child of `A` but not necessarily direct. `A > B` is more specific stating that `B` must be a child.
