import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

 

const BarChartComponent = ({zadaci,radovi,komentari}) => {
    const data=[];
    function brojPredatihRadova(id){ //po zadatku
        var brojac=0;
        for(var i=0;i<radovi.length;i++){
            if(radovi[i].zadatak.id==id){
                brojac++;
            }
        }
      
        return brojac;
      }
 

      for(var i=0;i<zadaci.length;i++){
         data.push({name:zadaci[i].id,pv:brojPredatihRadova(zadaci[i].id)})
      }

  return (
    <BarChart
      width={800}
      height={500}
      data={data}
      margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
 
    </BarChart>
  );
};

export default BarChartComponent;
