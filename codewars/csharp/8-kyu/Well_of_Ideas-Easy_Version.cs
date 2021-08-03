public class Kata
{
    public static string Well(string[] x)
    {
        int countGood = 0;
        foreach (string idea in x)
        {
            if (idea.ToLower() == "good")
                countGood++;
        }

        if (countGood == 0)
            return "Fail!";
        else if (countGood <= 2)
            return "Publish!";
        else
            return "I smell a series!";
    }
}