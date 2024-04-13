class Solution(object):
    def mergeAlternately(self, word1, word2):
        newString = ""
        maxLen = len(word1) + len(word2)

        for i in range(maxLen):
            if(i > (len(word1) - 1)):
                pass
            else:
                newString += word1[i]

            if (i > (len(word2) - 1)):
                pass
            else:
                newString += word2[i]
        return newString

                
