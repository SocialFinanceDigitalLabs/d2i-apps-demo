https://mellow-sherbet-71215f.netlify.app

NETLIFY_SHARING_SITE_ID
funny-taiyaki-a271a1.netlify.app

NETLIFY_EDITOR_SITE_ID
symphonious-toffee-f6d11e.netlify.app

# Notes

- This has multiple services, each one connects to the other;
- The "sharing editor" service allows to edit the code - it includes an Iframe with the "sharing" service;
- the "sharing" service uses the "kernel" service to properly render the app (the core of stlite);
- If you want to use the most updated version of the kernel, we should try and keep it in sync with the original repo OR just maintain it ourselves.
- maintain it ourselves would require to keep an update npm package
- we can just keep the kernel directory in sync with the original repo, and once a new version is released, the html file that renders the apps should also be updated

However
