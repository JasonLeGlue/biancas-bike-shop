using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BiancasBikes.Migrations
{
    /// <inheritdoc />
    public partial class RequireWorkOrderDescription : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "WorkOrders",
                type: "character varying(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "character varying(100)",
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "4bcee707-0cb7-4de0-9ff8-2081b1593404", "AQAAAAIAAYagAAAAEMx/8tUYTu3m8xYo3hZxXCbAmsoc/50XKm3dlNckE+KY/hLtEzETURE72iCGTPHyuQ==", "69568508-d5bf-477c-82e7-a9b30d44ced0" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "WorkOrders",
                type: "character varying(100)",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "character varying(100)",
                oldMaxLength: 100);

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "1b4da6c8-3b1e-415e-bf91-e6727c61343b", "AQAAAAIAAYagAAAAEByjdL6Cx7vUpAXQlyUVS5cqYcV8uS0SPgOt57LAd0/cw/C0G5/aBJyfP7X57KnyeA==", "6872c1fd-1186-4499-a626-aa4efea76a14" });
        }
    }
}
