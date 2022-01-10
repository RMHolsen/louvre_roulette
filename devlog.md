## 11 October 2021
Initialized repository
Created resources for User, Gallery, Artwork
First commit, pushed to Github
Filled out migrations, routes, uncommented rack-cors, added relationships to models, Artwork and Gallery controllers, added medium_hours method to User model
Pushed again
Added but did not fill out serializers, added serializer gem (fast_jsonapi)
Pushed again
**MIGRATIONS NOT RUN**

## 12 October 2021
Generated front-end with create-react-app
(App.test.js, logo.svg, reportWebVitals.js, setupTests.js may not be necessary. Leaving them in in case of crisps protocol.)
Cleared extraneous code and wrote in basic React app code
Pushed
Installed redux, react-redux, redux-thunk, react-router-dom
Pushed
Added file structure for front-end 
**MIGRATIONS STILL NOT RUN**

## 13 October 2021
Ran migrations
Confirmed front-end/back-end connection, debugged rack-cors initializer (don't forget to uncomment the initializer AND change the example.com. silly woman.)

## 14 October 2021
Added middleware, store to index.js
Filled out Reducer, Fetch, Container, and Show for Gallery, debugged. So much debugging for one single underscore.

## 15 October 2021
Cleaned up files, added explanatory comments
Filled out GalleryInput and AddGallery files to properly receive data and add to database.
Confirmed GalleryInput and AddGallery properly receives data and adds to database. Removed more user model artifact code.
~~BUG HUNT: App isn't refreshing after submit. What gives.~~ BUG SMASH: action was 'ADD_GALLERY in the action file and 'ADD_GALLERIES' in the reducer. This is becoming an issue. 

## 16 October 2021
Set up Gallery Show page for individual galleries, refactored individual gallery display to Gallery Show page, confirmed functionality
Set up React Router 
Set up routes for Galleries Show-All, Gallery Show, and Gallery Input
BUG SMASHED: Okay. Okay, this is fine, turns out that with the React tools I'm required to use it just doesn't fucking work in Firefox. This is fine. I do not have the patience to make it work in Firefox right now. Testing in Chrome from here on out. 

## 18 October 2021
Set up links in the Galleries show page 
Noted a potential problem in the Gallery show page (see project notes)
Added Switch to Gallery Container
Confirmed index.css is where the styling goes (don't forget to take down the hot pink, nobody will thank you for that)
Began integrating Artwork components into app, pushed

## 19 October 2021
(Okay, some things do work in Firefox, so... IDK)
Fixed the potential problem in Gallery show page! 
BUG SMASH: Fixed the problem with the gallery.artworks property not showing up at all ever. Turns out FastJSONApi is not actually the serializer we need for this. Used Active Model Serializer instead. (FastJSON remains commented out in the gemfile as a lesson to Future Me.)
Added Artworks to Gallery Show page 
Filled out Artwork Input and AddArtwork files, verified functionality of adding an artwork to a gallery

## 20 October 2021
Added delete function, tested (21 Oct 2021), confirmed

## 21 October 2021
Added copious styling, a la John Cage 4'33. 

## 27 October 2021
TO-DO: Review arrow function differences, longhand ways of using arrow function context, binding, apply, explicit vs implicit returns
TO-DO: Review Virtual-DOM: How react determines what to re-render, state updates, reconciliation, comparison (virtual-DOM is faster to update than DOM), re-render the differences. (This is similar to the minimal gifs protocols in Web 1.0, remember; Virtual-DOM streamlines for fast rendering)
TO-DO: Review JSON web tokens (try implementing)
Live-coding portion: 12:45 EST Fri 29 October (state, local state, events, update the DOM, review array JS methods (especially syntax! it's not the same as Rails!) just using React) Local state is the state in the component. setState works asynchronously, it gets put into the queue and then the app gets to it when it gets to it. 
Updating the dom: 
1. The JSX renders
2. VirtualDOM is updated
3. VirtualDOM is compared (like comparing in side by side windows)
4. Changed objects are updated
5. The actual DOM in the screen is changed

Review array and sort and concat in JS
Practice state manipulations

## 9 Nov 2021 
Updated Readme, standardized Project Notes 

## 9 Jan 2022
Deleted some cruft from React code challenges