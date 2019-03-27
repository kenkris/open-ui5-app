## Design decisions
1. Cloning master-detail template. Use it as base, since it already is using the list element
1. Hooking the application up to the REST service and setting the default model for the app to the services metadata . The we avoid local models and evrything data related is done server side (sorting, updating etc.)
1. CORS: For local development a proxy is needed since public odata service wont allow CORS. Seems to be a backend “issue”/design.
1. Stripped the master view for unused components. Search,filters etc. Scrapped the semantic:Page since it proved a bit rigid for this demo project. Using the plain page elemente to handle tilte and bar. 
1. Created new view/controller for addProduct. Dont want to bloat the master controller. Simple routing done.
