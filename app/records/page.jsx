"use client"

import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import PremiumBlock from "@/components/premiumblock";

export default function Records() {
    const [textbox, setTextbox] = useState(null);
    const [searchParams, setSearchParams] = useState(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const value = queryParams.get('name');
        setSearchParams(value);
    }, [])

    if (searchParams) return <Record targetName={searchParams.toLowerCase()} />

    return (
        <>
            {!searchParams && (
                <>
                    <div className="flex flex-col items-center justify-end" style={{ paddingLeft: "50px", paddingRight: "50px", minHeight: "50svh" }}>
                        <h1 style={{ marginBottom: "50px" }}>Go on. Their personal data is one search away.</h1>
                        <div className="flex flex-row w-full" style={{ marginBottom: "100px", maxWidth: "90rem" }}>
                            <Form.Control
                                id="textbox"
                                style={{ marginRight: "10px" }}
                                size="lg"
                                type="text"
                                onChange={(e) => setTextbox(e.target.value)}
                                placeholder="Enter the name of the person to search..."
                            />
                            <Button href={`records?name=${textbox}`} variant="primary" size="lg">Search</Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center" style={{ marginBottom: "150px" }}>
                        <img src="Search.jpeg" className="w-1/5" />
                    </div>
                </>
            )}
        </>
    )
}

function Record({ targetName }) {
    const [actualName, setActualName] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const names = {
        "Chin Ray": {
            "aka": ["chin", "ray", "tan"],
            "Name": "Chin Ray",
            "NRIC": "./flag.png",
            "School": "Ngee Ann Polytechnic",
            "Course": "Cybersecurity and Digital Forensics",
            "Year": "Y1S2",
            "GPA": "???",
            "picture": "chinray.png"
        },

        "Daksh": {
            "aka": ["daksh", "thapar"],
            "Name": "Daksh",
            "NRIC": "T1234567A",
            "School": "Ngee Ann Polytechnic",
            "Course": "Cybersecurity and Digital Forensics",
            "Year": "Y1S2",
            "GPA": "???",
            "picture": "daksh.webp"
        },

        "Ravin": {
            "aka": ["ravin", "nagpal", "wavin"],
            "Name": "Ravin",
            "NRIC": "T2345678B",
            "School": "Ngee Ann Polytechnic",
            "Course": "Cybersecurity and Digital Forensics",
            "Year": "Y1S2",
            "GPA": "???",
            "picture": "ravin.jpeg"
        },

        "Damian": {
            "aka": ["damian", "koh"],
            "Name": "Damian",
            "NRIC": "T3456789C",
            "School": "Ngee Ann Polytechnic",
            "Course": "Cybersecurity and Digital Forensics",
            "Year": "Y1S2",
            "GPA": "???",
            "picture": "damian.jpeg"
        }
    }

    useEffect(() => {
        Object.keys(names).forEach((name) => {
            names[name].aka.forEach((alias) => {
                if (targetName.includes(alias)) {
                    setActualName(name)
                }
            })
        })
        setIsLoading(false)
    }, [])

    if (isLoading) return <Spinner animation="grow" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />;

    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-[calc(100svh-60px)]" style={{ paddingTop: "5%", paddingBottom: "5%" }}>
                <div className="flex flex-col justify-center items-center w-full flex-1 border border-gray-400 rounded-2xl shadow-lg bg-gray-100" style={{ maxHeight: "600px", maxWidth: "1300px" }}>
                    <h1 className="justify-self-start" style={{ marginTop: "3%" }}>Search Result</h1>
                    <div className="flex flex-row justify-between items-center flex-1 w-full">
                        {actualName === null ?
                            (
                                <div className="flex flex-col justify-center items-center h-full w-full">
                                    <h1>No results found.</h1>
                                    <h4 className="text-secondary">That's weird. That person probably doesn't exist. We never make mistakes.</h4>
                                </div>
                            )
                            :
                            <>
                                <div className="flex flex-col justify-center items-center h-full w-2/3">
                                    <img src={names[actualName].picture} className="w-md h-md" style={{ maxWidth: "200px" }} />
                                </div>
                                <div className="flex flex-row items-start w-full h-full">
                                    <div className="flex flex-col justify-center items-start h-full w-1/4">
                                        <h2>Name:</h2>
                                        <br />
                                        <h2>NRIC:</h2>
                                        <br />
                                        <h2>School:</h2>
                                        <br />
                                        <h2>Course:</h2>
                                        <br />
                                        <h2>Year:</h2>
                                        <br />
                                        <h2>GPA:</h2>
                                    </div>
                                    <div className="flex flex-col justify-center items-start h-full w-full">
                                        <h2>{names[actualName].Name}</h2>
                                        <br />
                                        <div className={names[actualName].NRIC === "./flag.png" && "blur-lg"}>
                                            {
                                                names[actualName].NRIC === "./flag.png" ? <img src={"flag.png"} style={{ width: "75%" }} /> : <h2>{names[actualName].NRIC}</h2>
                                            }
                                            <br />
                                            <h2>{names[actualName].School}</h2>
                                            <br />
                                            <h2>{names[actualName].Course}</h2>
                                            <br />
                                            <h2>{names[actualName].Year}</h2>
                                            <br />
                                            <h2>{names[actualName].GPA}</h2>
                                        </div>
                                    </div>
                                </div>
                                <PremiumBlock />
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}