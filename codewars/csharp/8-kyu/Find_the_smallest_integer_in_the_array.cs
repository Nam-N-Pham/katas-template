public class SmallestIntegerFinder
{
    public static int findSmallestInt(int[] args)
    {
        int smallest = args[0];
        foreach (int number in args)
        {
            if (number < smallest)
            {
                smallest = number;
            }
        }
        return smallest;
    }
}