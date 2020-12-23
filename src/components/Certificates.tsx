import React from "react";
import { CardColumns } from "react-bootstrap";
import CertCard from "./CertCard";
import data from "../data.json";

export default function Certificates(){
    return (<React.Fragment>
        <CardColumns>
           {data.sort(
               (a,b)=> b.time.localeCompare(a.time)
               ).map( cert => 
                <CertCard {...cert}/>
        )
        }
      </CardColumns>
    </React.Fragment>
    )
}