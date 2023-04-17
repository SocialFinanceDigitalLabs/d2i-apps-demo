# D2I apps demo
platform that can host multiple [streamlit](https://streamlit.io/) apps running on pyodide using [stlit](https://github.com/whitphx/stlite).


# Local setup

### To run just one app:
- install the `requirements.txt`
- run `streamlit run pages/<YOUR_APP_FILE>`
- the server will run on port `8502` by default.

### To run the standard streamlit version:
- install the `requirements.txt`
- run `streamlit run D2I_Apps.py`
- the server will run on port `8502` by default.


### To run the serverless version (stlit):
- install the `requirements.txt`
- run `python run.py`
- the server will run on port `8000` by default.

The serverless version looks for a `config.json` files that compiles the different apps. This file is populated whenever any file changes in this directory (other than the `config.json`file) If a new file is added to the `pages` directory, it is treated as a new app.


# TODO
- [ ] use poetry for local development/testing/etc...
- [ ] put all the files that are not really required for the analysts in the "gh-pages" branch (or change it's name to "production"). maybe the just need the "pages" directory and can run streamlit against each app?
- [ ] split apps into directories and allow custom requirements and multiple python files - the build command can read them, compile the python files together, and build the json file accordingly. Also allow empty requirements (just the default ones); However, this would mean that each app will reload each time.
- [ ] 
