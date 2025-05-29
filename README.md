Install Ollama from https://ollama.com/.

Search for the model you want to use at https://ollama.com/search.

Select a model and click on it. You will see a command like ollama run deepseek-r1. Open your command prompt and run this command to install the model.

Open modelfile which avaible with code and change the LLM model name to the one you installed (e.g., ollama run deepseek-r1).

Run the following command to create your custom model:

ollama create mrkamalkishor -f ./Modelfile Finally, run your custom model with:

ollama run mrkamalkishor
