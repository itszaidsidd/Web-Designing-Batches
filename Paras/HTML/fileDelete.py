import os
fname=input('Enter filename : ')
if os.path.exists(fname):
    os.remove(fname)
    print('Suceessfully Deleted')
else:
    print('File not found')