"""
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
"""

def to_underscore(string):
    return str(string)[0].lower() + "".join([s if s.lower() == s else "_" + s.lower() for s in str(string)[1:]])

# --------------------------------------------------------------- #
# import re                                                       #
#                                                                 #
# def to_underscore(string):                                      #
#     return re.sub(r'(.)([A-Z])', r'\1_\2', str(string)).lower() #
# --------------------------------------------------------------- #
