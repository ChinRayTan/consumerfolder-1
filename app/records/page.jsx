"use client"

import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

export default function Records() {
    const [textbox, setTextbox] = useState(null);
    const [searchParams, setSearchParams] = useState(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const value = queryParams.get('name');
        setSearchParams(value);

    }, [])

    if (searchParams) return <Record targetName={searchParams} />

    return (
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
    )
}

function Record(targetName) {
    const [actualName, setActualName] = useState(targetName);
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
            "picture": "Chin Ray.jpeg"
        },

        "Daksh": {
            "aka": ["daksh", "thapar"],
            "Name": "Daksh",
            "NRIC": "T1234567A",
            "School": "Ngee Ann Polytechnic",
            "Course": "Cybersecurity and Digital Forensics",
            "Year": "Y1S2",
            "GPA": "???",
            "picture": "Daksh.jpeg"
        },

        "Ravin": {
            "aka": ["ravin", "nagpal", "wavin"],
            "Name": "Ravin",
            "NRIC": "T2345678B",
            "School": "Ngee Ann Polytechnic",
            "Course": "Cybersecurity and Digital Forensics",
            "Year": "Y1S2",
            "GPA": "???",
            "picture": "Ravin.jpeg"
        },

        "Damian": {
            "aka": ["damian", "koh"],
            "Name": "Damian",
            "NRIC": "T3456789C",
            "School": "Ngee Ann Polytechnic",
            "Course": "Cybersecurity and Digital Forensics",
            "Year": "Y1S2",
            "GPA": "???",
            "picture": "Damian.jpeg"
        },

        "Jing Shun": {
            "aka": ["jing", "shun", "ooi", "fish"],
            "Name": "Jing Shun",
            "NRIC": "T4567890D",
            "School": "Ngee Ann Polytechnic",
            "Course": "Information Technology",
            "Year": "Y1S2",
            "GPA": "???",
            "picture": "Jing Shun.jpeg"
        }
    }

    useEffect(() => {
        Object.keys(names).forEach((name) => {
            names[name].aka.forEach((alias) => {
                if (alias.includes(targetName)) {
                    setActualName(name)
                    console.log(name)
                }
            })
        })
    }, [])

    if (isLoading) return <Spinner animation="grow" className="justify-self-center"/>;

    return (
        <>
            <div className="flex flex-col items-center justify-center" style={{ marginBottom: "150px" }}>
                <img src={name.picture} className="w-1/5" />
                <h1>{name.Name}</h1>
                <h4 className="text-secondary">NRIC: {names[actualName].NRIC}</h4>
                <h4 className="text-secondary">School: {names[actualName].School}</h4>
                <h4 className="text-secondary">Course: {names[actualName].Course}</h4>
                <h4 className="text-secondary">Year: {names[actualName].Year}</h4>
                <h4 className="text-secondary">GPA: {names[actualName].GPA}</h4>
            </div>
        </>
    )
}