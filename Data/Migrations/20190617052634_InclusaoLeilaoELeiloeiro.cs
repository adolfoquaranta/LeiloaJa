using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace LeiloaJa.Data.Migrations
{
    public partial class InclusaoLeilaoELeiloeiro : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Leiloeiros",
                columns: table => new
                {
                    IdLeiloeiro = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Leiloeiros", x => x.IdLeiloeiro);
                });

            migrationBuilder.CreateTable(
                name: "Leiloes",
                columns: table => new
                {
                    IdLeilao = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(nullable: false),
                    ValorInicial = table.Column<decimal>(nullable: false),
                    IndCondicaoUso = table.Column<bool>(type: "Boolean", nullable: false),
                    DataDeAbertura = table.Column<DateTime>(nullable: false),
                    DataDeFinalizacao = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Leiloes", x => x.IdLeilao);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Leiloeiros");

            migrationBuilder.DropTable(
                name: "Leiloes");
        }
    }
}
