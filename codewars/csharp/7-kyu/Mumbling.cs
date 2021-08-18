using System;

public class Accumul
{
    public static String Accum(string s)
    {
        string sLowerCase = s.ToLower();
        string answer = "";

        for (int indexOfs = 0; indexOfs < sLowerCase.Length; indexOfs++)
        {
            for (int numOfLettersToPrint = indexOfs + 1; numOfLettersToPrint > 0; numOfLettersToPrint--)
            {
                if (numOfLettersToPrint == indexOfs + 1)
                {
                    answer += sLowerCase[indexOfs].ToString().ToUpper();
                }
                else
                    answer += sLowerCase[indexOfs];
            }
            if (indexOfs < s.Length - 1)
                answer += "-";
        }

        return answer;
    }
}