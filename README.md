# Maps Starter

## Notes on build

The same Typescript starter you already have, with the following added: 
 - `@types/googlemaps` package gives us access to the google types, such as google.maps.Map and google.maps.Marker
 - `index.d.ts` file declares googlemaps as a module, because it isn't one out of the box. Don't worry about this one - it's purely to avoid an annoying squiggly line and could be omitted.

## Testing

This app interacts with the dom a lot, much like your other projects. Testing the google object would be extremely difficult as a result, and is probably not time-efficient. You could test other location generation or maths though!