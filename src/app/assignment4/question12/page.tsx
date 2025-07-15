import MuiDataTable from "@/app/components/muiTableComponent";

export default function Question12() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center", 
                marginTop: "40px",    
            }}>
            <h3>
                12. Build a data table using Material-UI's Table component. Populate the table with sample data and add features like sorting and pagination. 
            </h3>
            <MuiDataTable />
        </div>
    )
}