function Solutions() {
  const headers = [
    {
      header: "Asset Management",
      bodyTxt:
        "Gain control of your asset with Software that helps you keep track of your physical assets.",
    },

    {
      header: "Risk Management",
      bodyTxt: "Identify, capture and monitor enterprise risks with ease",
    },

    {
      header: "Documents Management",
      bodyTxt:
        "Easy-to-use solution that enables your firm to convert paper into electronic files..",
    },

    {
      header: "Performance Management",
      bodyTxt:
        "Achieve business stragetic goals with a solution ensuring organizations are running effenciently.",
    },

    {
      header: "Audit",
      bodyTxt:
        "Streamline your audit processes and comply with regulations or internal policies.",
    },

    {
        header: "Compliance",
        bodyTxt:
          "Manage and meet legal requirements and comply with applicable laws and regulations.",
      },


  ];

  return (
    <div className="solutions">
        {
            headers?.map((val,ind)=>{
                return(
                    <div className="box" key={ind}>
                        <h1>{val.header}</h1>
                        <p>{val.bodyTxt}</p>
                        <button>LEARN MORE</button>
                    </div>
                )
            })
        }
    </div>
  );
}

export default Solutions;
