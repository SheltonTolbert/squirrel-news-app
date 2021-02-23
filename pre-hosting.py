import shutil

print("start work after build")

try:
    shutil.rmtree('../squirrel-news-firebase/build')
except:
    print("Rebuilding firebase/public")

shutil.move('./build/', '../squirrel-news-firebase/build')

print("fin postbuilding")
