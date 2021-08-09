public class Kata
{
    public static int Collatz(int n)
    {
        int counter = 1;
        while (n > 1)
        {
            if (n % 2 == 0)
            {
                n = n / 2;
            }
            else
            {
                n = 3 * n + 1;
            }
            counter++;
        }
        return counter;
    }
}