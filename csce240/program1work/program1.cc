/* Talia Barsness
  CSCE 240 Programming Assignment 1
  Purpose: Converts numeric values in bases 2 through 9 to decimal.
  The program validates the base and digits, outputs each decimal value, and keeps track of the largest value entered. */
#include <iostream>
using namespace std;

int main()
{
    int number;
    int base;
    int digit;
    int temp;
    int decimal;
    int place;
    int count = 0;
    int largest = 0;
    int largestPosition = 0;
    char again;

    do
    {
        cin >> number >> base;

        // Check that the base is valid
        if (base < 2 || base > 9)
        {
            cout << "Base Not Accepted" << endl;
            return 0;
        }

        // Check that every digit is valid
        temp = number;

        if (temp < 0)
        {
            temp = -temp;
        }

        while (temp > 0)
        {
            digit = temp % 10;

            if (digit >= base)
            {
                cout << "Invalid Digit(s) in Number" << endl;
                return 0;
            }

            temp = temp / 10;
        }

        // Convert the number to decimal
        temp = number;

        if (temp < 0)
        {
            temp = -temp;
        }

        decimal = 0;
        place = 1;

        while (temp > 0)
        {
            digit = temp % 10;

            decimal = decimal + digit * place;
            place = place * base;

            temp = temp / 10;
        }

        // Make the decimal value negative if the original number was negative
        if (number < 0)
        {
            decimal = -decimal;
        }

        cout << decimal << endl;

        // Count this value
        count++;

        // Keep track of the largest value
        if (count == 1 || decimal > largest)
        {
            largest = decimal;
            largestPosition = count;
        }

        // Read y or n
        cin >> again;

    } while (again == 'y');

    // Print the final result
    cout << "Of the " << count << " values input, the "
         << largestPosition;

    if (largestPosition % 100 >= 11 &&
        largestPosition % 100 <= 13)
    {
        cout << "th";
    }
    else if (largestPosition % 10 == 1)
    {
        cout << "st";
    }
    else if (largestPosition % 10 == 2)
    {
        cout << "nd";
    }
    else if (largestPosition % 10 == 3)
    {
        cout << "rd";
    }
    else
    {
        cout << "th";
    }

    cout << " value entered (" << largest
         << ") was the largest" << endl;

    return 0;
}