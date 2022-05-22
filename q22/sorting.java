import java.util.Scanner;
class Sorting {
    static void bubbleSort(int[] a) {
        int l = a.length;
        for (int i = 0; i < l - 1; i++) {
            int t;
            for (int j = 0; j < l - i - 1; j++) {
                if (a[j] > a[j + 1]) {
                    t = a[i];
                    a[i] = a[j];
                    a[j] = t;
                }
            }
        }
    }

    static void selectionSort(int[] a) {
        int l = a.length;
        for (int i = 0; i < l - 1; i++) {
            int min = i;
            for (int j = i + 1; j < l; j++) {
                if (a[j] < a[min]) {
                    min = j;
                }
            }
            int t = a[i];
            a[i] = a[min];
            a[min] = t;
        }
    }

    static void insertionSort(int[] a) {
        int l = a.length;
        for (int i = 1; i < l; i++) {
            int j = i;
            while (j > 0 && a[j - 1] > a[j]) {
                int t = a[j];
                a[j] = a[j - 1];
                a[j - 1] = t;
                j--;
            }
        }
    }

    static void printArray(int[] a) {
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println();
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int Arr[] = { 2, 40, 1, 90, 3, 8, 19 };
        System.out.println("Original Array");
        printArray(Arr);
        System.out.println("Choose Sorting Method:");
        System.out.println("1. Bubble Sort");
        System.out.println("2. Selection Sort");
        System.out.println("3. Insertion Sort");
        int choice = sc.nextInt();

        switch (choice) {
            case 1:
                bubbleSort(Arr);
                break;
            case 2:
                selectionSort(Arr);
                break;
            case 3:
                insertionSort(Arr);
                break;
            default:
                System.out.println("Invalid Choice");
        }
        System.out.println("Sorted Array");
        printArray(Arr);
    }
}
