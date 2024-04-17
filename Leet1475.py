class Solution(object):
    def finalPrices(self, prices):
        """
        :type prices: List[int]
        :rtype: List[int]
        """
        answer = []

        for i in range(len(prices)):
            if (i+1 == len(prices)):
                answer.append(prices[i])
            else:
                for j in range(i+1, len(prices)):
                    if (prices[i] >= prices[j]):
                        answer.append(prices[i] - prices[j])
                        break
                if (len(answer) != i+1):
                    answer.append(prices[i])
        return answer
