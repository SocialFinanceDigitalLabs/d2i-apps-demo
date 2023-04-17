import os
import json


def build():
    # Specify the directory containing the Python files
    directory = "pages"
    main_app_file = "D2i_apps.py"
    requirements_file = f"{directory}/requirements.txt"

    # Initialize an empty dictionary to hold the file data
    files = {}

    with open(os.path.join(main_app_file), "r") as f:
        file_content = f.read()
        files[main_app_file] = file_content

    # Loop through each file in the directory
    for filename in os.listdir(directory):
        # Check that the file is a Python file
        if filename.endswith(".py"):
            # Open the file and read its contents
            with open(os.path.join(directory, filename), "r") as f:
                file_content = f.read()
            # Add the file content to the dictionary with the filename as the key
            files[f"pages/{filename}"] = file_content

    with open(os.path.join(requirements_file), "r") as f:
        requirements = [r for r in f.read().split("\n") if r]

    config = {"entrypoint": main_app_file, "files": files, "requirements": requirements}
    # Open the output file for writing
    with open("config.json", "w") as json_file:
        json.dump(config, json_file)


if __name__ == "__main__":
    build()
