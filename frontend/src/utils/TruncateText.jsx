export default function TruncateText({str , length }){
    return str?.length > 10 ? str.substring(0, length) + "..." : str
}

