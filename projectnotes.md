## **DO NOT FORGET TO ADD 1.3.6 TO YOUR SQLITE VERSION ARGH.**
1. create-react-app command in super-directory
    -- mkdir project-name in the projects folder
    -- Type 'rails _ 5.0.7.2_ new project-name --api (--no-test-framework?) in the project-name folder, creating the rails api subfolder
    -- type create-react-app in the project-name folder, creating the front end of the application
2. front end will come with baggage. the necessary files in /src are App.js and index.js (see files) (okay I lied we're just doing this in the same folder)
3. Back end and front end need to be separate repositories, so initialize separately, create separate repositories, git add remote origin separately, etc.
4. Generate models/controllers/migrations for each component? object rails g resource [resource name] --no-test-framework (do *not* forget the --no-test-framework)
5. Add relationships and validations to models
6. Double check migrations and then run migrations.
7. Namespace routes, if desired. Do *not* forget to uncomment both the rack-cors gem and config/initializers/cors.rb Rack-CORS middleware (see notes in file)
8. TEST: Can we access data from the database? Use a componentDidMount() on the app page, which is the only one loading atm. (see files)
9. Create Serializers so that User (and Gallery) objects are fetched with their associated data. Add fast-json-api gem to gemfile and run bundle install, then rails g serializer [model name]
10. Add relationships and attributes to serializers (has_many :galleries/:artworks, :medium, :name/title, etc)
11. In the front end, run npm install redux, react-redux, redux-thunk, react-router-dom with flag --save 
12. Add store (see files)
    -- wrap <App /> in <Provider>
    -- let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk))): thunk is the middleware we're using right now (and then passing store={store} into Provider)
    -- add compose to import { createStore, applyMiddleware, compose } from 'redux'. Compose allows chaining together functions.
    -- store is where the data is stored
    -- reducers are what you want to do with the data based on certain actions, i.e. case switch statements. they return a new version of the store
13. Add Containers/Actions/Components/Reducers to /src/ folder
    -- container components are usually class components that usually render other components
14. Add reducers
    -- in index.js, add const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    -- nReducer deals with the parts of the store that have to do with n. So galleryReducer deals with the gallery data, etc.
    -- import the reducer into index.js or use the combine reducers method (see combine reducers lab)
    -- change createStore(reducers, ...) into createStore(rootReducer, ...) or whatever we're calling the combined reducers.
15. Action creators 
    -- go in the actions folder
    -- are functions
    -- import connect from react-redux into app component
16. Create Components/Containers - Gallery and Gallery Input receive and display data (write and show components) and Gallery Container wraps them both, which App then wraps itself. The toe bone connected to the foot bone, the foot bone connected to the ankle bone. Dem bones dem bones. 

## Requirements
-- The code should be written in ES6 as much as possible
Use--  the create-react-app generator to start your project. (Follow the instructions on this repo to setup the generator: create-react-app) DONE
-- Your app should have one HTML page to render your react-redux application
-- There should be 5 stateless components (six, three show, three fetch)
-- There should be 3 routes (/galleries, /gallery_id, /gallery_id/artwork ?)
-- The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate docs (Links to an external site.); docs for v4 can be found here (Links to an external site.))
-- Use Redux middleware to respond to and modify state change DONE
-- Make use of async actions and redux-thunk middleware to send data to and receive data from a server DONE
-- Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.
-- Your client-side application should handle the display of data with minimal data manipulation
-- Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!

## Architecture
gallery has_many :artworks
artwork belongs_to :gallery
gallery belongs_to :user
user has_many :galleries
user has_many artworks, through: :galleries

user
    t.string :username
    t.string :password_digest 
    t.text :profile
    t.string :display_name
gallery
    t.string :name 
    t.string :description 
    t.belongs_to :user 
work
    t.string :title
    t.string :medium
    t.string :style 
    t.string :subject
    t.string :url
    t.belongs_to :gallery
    

The Index bone's connected to the App bone, the App bone's connected to the Container bone, the Container bone's connected to the Fetch bone
the Fetch bone's connected to the Reducer bone, the Reducer bone's connected to the Show bone
do NOT forget to proof for underscores, proper quotes, and file names 