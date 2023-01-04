export default function ContentTableWrapper({ children }) {
    return (
        <div>
            <table className='table table-bordered table-sm table-striped table-hover'>
                {children}
            </table>
        </div>
    );
}