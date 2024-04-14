class Solution(object):
    def gcdOfStrings(self, str1, str2):

        def gcd(a, b):
            while b:
                a, b = b, a % b
            return a
        
        len1, len2 = len(str1), len(str2)
        g = gcd(len1, len2)

        same = str1[:g]

        if same * (len1 // g) == str1 and same * (len2 // g) == str2:
            return same
        else:
            return ''
        
