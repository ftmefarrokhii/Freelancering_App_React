import Table from "../../ui/Table"
import toPersianNumbersWithComma, { toPersianNumbers } from "../../utils/toPersianNumbersWithComma"

export default function ProposalRow({proposal,index}){
    const {status,description,duration,price} = proposal
    const statusStyle = [
        {
            label: "رد شده",
            className : "badge--danger"
        },
        {
            label: "در انتظار تایید",
            className : "badge--secondary"
        },
        {
            label: "تایید شده",
            className : "badge--success"
        }
    ]
    return(
        <Table.Row>
            <td>{index + 1}</td>
            <td>{description}</td>
            <td>{toPersianNumbers(duration)} روز</td>
            <td>{toPersianNumbersWithComma(price)}</td>
            <td>
                <span className={`badge ${statusStyle[status].className}`}>
                    {statusStyle[status].label}
                </span>
            </td>
         </Table.Row>   
    )
}