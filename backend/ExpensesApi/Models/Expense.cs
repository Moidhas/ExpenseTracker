namespace ExpensesApi.Models;

public class Expense 
{
    public long Id { get; set; } 
    required public string Description { get; set; }
    required public decimal Price { get; set; }
}
