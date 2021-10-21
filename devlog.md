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