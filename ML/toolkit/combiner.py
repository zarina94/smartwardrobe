import os
count = 0
classifiers = os.listdir('/home/smartwardrobe/ML/dataset/img_highres/')
for clas in classifiers:
    for root,dirs,files in os.walk("/home/smartwardrobe/ML/dataset/img_highres/{}".format(clas)):
        #print("rm -r {}".format(root))
        #os.system("rm -r {}".format(root))
        for f in files:
            #print("mv {}/{} /home/smartwardrobe/ML/dataset/img_highres/{}/{}.jpg".format(root,f,clas,count))
            os.system("mv {}/{} /home/smartwardrobe/ML/dataset/img_highres/{}/{}.jpg".format(root,f,clas,count))
            count += 1
        
        
            #os.system("rm -r /home/smartwardrobe/ML/dataset/img_highres/{}".format(d))
        print("done subset\n")
    print("done class\n")


