# praxis
Praxis Technical Test

# To make the UI project work:
Need to create .env file just like the .env.example, and put these values:
VITE_BING_SERVICE_BASE_URL=https://api.bing.microsoft.com/
VITE_BING_SERVICE_SUBSCRIPTION_KEY=<BING_SERVICE_SUBSCRIPTION_KEY>

# UI improvements/todos:
Use barrel index files to avoid too much lines of imports.
Use tsconfig paths for imports with @ shortcuts.
Handle errors if request to Bing service fails.
Implement some testing using PlayWright or Mock Service Worker.
Deploy to Azure.

# API improvements/todos:
Apply CLEAN architecture.
Implement UnitOfWork and DB Transactions.
Models Tag Attributes.
Add 'Async' ending to methods that are async.
Implement exceptions handler.
Implement logger.
Deploy to Azure.