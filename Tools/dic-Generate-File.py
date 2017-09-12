# This generate dictionary and write to file 

def write_file(file_name,data):
    """
    this function write data to file
    :param data:
    :return:
    """
    with open(file_name, 'a') as x_file:
        x_file.write(data+'\n')

def password(file_name,start,finish):
    count = start
    while count < finish:
       write_file(file_name,str(count))
       count = count + 1

def users(file_name):
    alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for third in alphabet:    
        for second in alphabet:
            for last in alphabet:
                write_file(file_name,str('1h'+third+second+last))

def run():
    # password('passwords.js',100,1000)
    # users('usernames.txt')
    print ('Good bye')

run()