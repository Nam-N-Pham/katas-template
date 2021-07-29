using System;

public class Kata
{
    public static int CalculateTip(double amount, string rating)
    {
        if (string.Equals(rating, "terrible", StringComparison.OrdinalIgnoreCase))
        {
            return (int)Math.Ceiling(amount * 0);
        }
        else if (string.Equals(rating, "poor", StringComparison.OrdinalIgnoreCase))
        {
            return (int)Math.Ceiling(amount * 0.05);
        }
        else if (string.Equals(rating, "good", StringComparison.OrdinalIgnoreCase))
        {
            return (int)Math.Ceiling(amount * 0.1);
        }
        else if (string.Equals(rating, "great", StringComparison.OrdinalIgnoreCase))
        {
            return (int)Math.Ceiling(amount * 0.15);
        }
        else if (string.Equals(rating, "excellent", StringComparison.OrdinalIgnoreCase))
        {
            return (int)Math.Ceiling(amount * 0.2);
        }
        else
        {
            return -1;
        }
    }
}