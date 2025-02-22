import Button from "react-bootstrap/Button";

export default function PremiumBlock() {
    return (
        <div className="flex flex-col items-center justify-center absolute h-full" style={{ marginBottom: "150px", maxWidth: "600px", right: "27%", top: "6%" }}>
            <h1>Secret User Profile 😱</h1>
            <h4 style={{ marginTop: "10px" }} className="text-secondary">This user bribed us $5000 not to reveal his profile.</h4>
            <h4 className="text-secondary">Double it up, pay us $10,000 if you wanna see it.</h4>
            <Button href="/toopoor" style={{ marginTop: "20px" }} variant="primary" size="lg">Pay and Unlock</Button>
        </div>
    )
}