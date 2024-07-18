using Microsoft.EntityFrameworkCore;
using ExpensesApi.Models;

public class ExpensesContext : DbContext
{
    public ExpensesContext (DbContextOptions<ExpensesContext> options)
        : base(options)
    {
    }

    public DbSet<Expense> Expense { get; set; } = default!;
}
