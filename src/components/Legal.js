import React, { Component } from 'react';

export default class Legal extends Component {

    render() { return (
    <>
    <h1 className="tabletitle">
        <strong>LEGAL SERVICES</strong>

        </h1>
    <p className="resourcedescription">Miami-Dade residents and immigrants could face risks of being racially profiled and being detained without probable cause.</p>
    <p className="resourcedescription">For immigrants who arrive without documentation, the fear of deportation can prevent them from seeking help. Even though millions of children of undocumented immigrants are eligible for health insurance under the Affordable Care Act, many families either may not know about the eligibility or be afraid to register due to fear of separation.</p>
    <p className="resourcedescription">Are you a Miami-Dade Latinx immigrant or resident needing legal services?</p>

    <h1 className="tabletitle">Immigration Services Providers</h1>
    <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Contact Info</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>Center for Immigrant Advancement, Inc. (CIMA)</th>
            <th>Pro Bono</th>
            <th>100 SE 2nd St STE 2000, Miami, Florida 33131 (305) 416-8811</th>
          </tr>
          <tr>
            <th>Catholic Charities Legal Services Archdiocese of Palm Beach, Inc.</th>
            <th>Pro Bono</th>
            <th>7031 SW 62nd Ave South Miami, FL 33143 (305) 330-1534</th>
          </tr>
          <tr>
            <th>Florida Justice For Our Neighbors</th>
            <th>Pro Bono</th>
            <th>1000 Brickell Ave Miami, Fl 33130 (908) 852-1887</th>
          </tr>
          <tr>
            <th>American Bar Association Detention and LOP Info Line</th>
            <th>Pro se case assistance for detained respondents only</th>
            <th>1121 NW 14th St Floor 1, Miami, FL, 33135 (305) 243-0214</th>
          </tr>
          <tr>
            <th>Americans for Immigrant Justice</th>
            <th>Pro Bono</th>
            <th>2660 SW 3rd St, Miami, FL 33135 (786) 281-1005</th>
          </tr>
          </tbody>
        </table>

        <h1 className="tabletitle">Other Legal Aid Providers</h1>
    <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Contact Info</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>Casa Miami</th>
            <th>Free legal services to immigrants that have been victims of domestic violence</th>
            <th>292 S University Drive, Miami, FL 33130, (305) 487-8646</th>
          </tr>
          <tr>
            <th>Florida Justice Institute Miami Tower</th>
            <th>Free legal services for prisoners rights, housing discrimination, disability discrimination</th>
            <th>7031 SW 62nd Ave South Miami, FL 33143 (786) 244-6582</th>
          </tr>
          <tr>
            <th>Cuban American Bar Association Pro Bono Project</th>
            <th>Free legal services for Cuban immigrants experiencing work and housing discrimination</th>
            <th>1000 Brickell Ave Miami, Fl 33130 (305) 570-4010</th>
          </tr>
          <tr>
            <th>Americans for Immigrant Justice</th>
            <th>Free legal services for children program, domestic violence, and human trafficking</th>
            <th>1121 NW 14th St Floor 1, Miami, FL, 33135 (305) 243-0214</th>
          </tr>
          <tr>
            <th>Dade Legal Aid Put Something Back</th>
            <th>Free legal services for LGBTQ+</th>
            <th>2660 SW 3rd St, Miami, FL 33135 (786) 281-1005</th>
          </tr>
          </tbody>
        </table>
    </>
    )
}
}