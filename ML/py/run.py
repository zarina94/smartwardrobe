import os
mainDir = "/home/smartwardrobe"
os.system("python3 /home/smartwardrobe/ML/retrain.py --bottleneck_dir=/home/smartwardrobe/ML/simpler --how_many_training_steps 100000  --model_dir=/home/smartwardrobe/ML/inception --output_graph=/home/smartwardrobe/ML/simpler_graph.pb --output_labels=/home/smartwardrobe/ML/simpler_labels.txt --image_dir=/home/smartwardrobe/ML/dataset/img_highres")
