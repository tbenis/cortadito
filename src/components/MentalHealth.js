import React, { Component } from 'react';
import '../assets/css/mentalHealth.css'
import therapist from "../assets/therapist.jpeg"

export default class Mentalhealth extends Component {

    render() { 

      let name;
      if(localStorage.getItem("user")){
        name = <><br/> <br/> <h1>Welcome {localStorage.getItem("user")}</h1> <br/><br/> </>
      } else {
        name = ""
      }
      return (
      <div className="mental-health">


        {name}
        <h1 className="tabletitle">
          <strong>MENTAL HEALTH</strong>
        </h1>
        <img src={therapist} className="resourceimg"></img>
        <p className="resourcedescription">
          Miami was a hot spot during the pandemic and has been among the worst
          areas in the nation. The pandemic has exacerbated existing issues
          related to trauma, depression, anxiety, domestic violence,
          suicidality, and substance abuse among the Latinx families in Miami.
        </p>
        <p className="resourcedescription">
          Hispanic/Latinx communities show similar vulnerability to mental
          illness as the general population, but they face disparities in both
          access to and quality of treatment. More than half of Hispanic young
          adults ages 18-25 with serious mental illness may not receive
          treatment. This inequality puts these communities at a higher risk for
          more severe and persistent forms of mental health conditions, because
          without treatment, mental health conditions often worsen.
        </p>
        {/* <p>
          Approximately 34% of Hispanic/Latinx adults with mental illness
          receive treatment each year compared to the U.S. average of 45%. This
          is due to many unique barriers to care.
        </p>
        <p>
          Are you a Miami-Dade Latinx resident and need resources for mental
          health?
        </p> */}
        <h1 className="tabletitle">Bilingual Psychiatrists</h1>
        <table className='styled-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Contact Info</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th>Dr. Gonzalo F. Quesada, MD</th>
              <th>Psychiatrist</th>
              <th>
                100 SE 2nd St STE 2000, Miami, Florida 33131 (305) 416-8811
              </th>
            </tr>
            <tr>
              <th>Dr. Robert Stewart, DO</th>
              <th>Psychiatrist</th>
              <th>7031 SW 62nd Ave South Miami, FL 33143 (305) 330-1534</th>
            </tr>
            <tr>
              <th>Dr. Vineet Sandhu, MD</th>
              <th>Psychiatrist</th>
              <th>1000 Brickell Ave Miami, Fl 33130 (908) 852-1887</th>
            </tr>
            <tr>
              <th>Dr. Maria Adelaida Rueda-Lara, MD</th>
              <th>Psychiatrist</th>
              <th>1121 NW 14th St Floor 1, Miami, FL, 33135 (305) 243-0214</th>
            </tr>
            <tr>
              <th>Dr. Jose Valldaraes, MD</th>
              <th>Psychiatrist</th>
              <th>2660 SW 3rd St, Miami, FL 33135 (786) 281-1005</th>
            </tr>
          </tbody>
        </table>

        <h1 className="tabletitle">Bilingual Therapists</h1>
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
              <th>Teresita Lambertt, LMHC</th>
              <th>Counselor</th>
              <th>292 S University Drive, Miami, FL 33130, (305) 487-8646</th>
            </tr>
            <tr>
              <th>Olivia Lima, LMHC</th>
              <th>Counselor</th>
              <th>7031 SW 62nd Ave South Miami, FL 33143 (786) 244-6582</th>
            </tr>
            <tr>
              <th>Carol Quintana, PhD</th>
              <th>Psychologist</th>
              <th>1000 Brickell Ave Miami, Fl 33130 (305) 570-4010</th>
            </tr>
            <tr>
              <th>Christina Algeciras, MS, LMHC, RYT, CCTP</th>
              <th>Counselor</th>
              <th>1121 NW 14th St Floor 1, Miami, FL, 33135 (305) 243-0214</th>
            </tr>
            <tr>
              <th>Isabel Trabanco, LCSW</th>
              <th>Clinical Social Work/Therapist</th>
              <th>2660 SW 3rd St, Miami, FL 33135 (786) 281-1005</th>
            </tr>
          </tbody>
        </table>

        <h1 className="tabletitle">Hotlines and Websites</h1>
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
              <th>Florida Blue Helpline</th>
              <th>Bilingual 24/7 free therapy for all</th>
              <th>1(833) 848-1762 - https://www.floridablue.com/</th>
            </tr>
            <tr>
              <th>Optum</th>
              <th>24/7 free and confidential therapy for all</th>
              <th>1(866) 342-6892</th>
            </tr>
            <tr>
              <th>National Alliance on Mental Illness(NAMI)</th>
              <th>
                Support, education, and advocacy resources for people with
                mental illness
              </th>
              <th>http://www.nami.org</th>
            </tr>
            <tr>
              <th>Thriving Mind/South Florida Behavioral Health Network</th>
              <th>
                Promotes access to individuals and families including uninsured
                individuals in Miami-Dade and Monroe counties
              </th>
              <th>https://www.thrivingmind.org/</th>
            </tr>
            <tr>
              <th>National Suicide Hotline</th>
              <th>
                24/7 hotline for free and confidential support for people in
                distress, prevention, and crisis resources
              </th>
              <th>1-800-273-8255 https://suicidepreventionlifeline.org/</th>
            </tr>
            <tr>
              <th>National Domestic Violence</th>
              <th>24/7 hotline for victims of domestic violence</th>
              <th>1-800-962-2873</th>
            </tr>
            <tr>
              <th>Teen Crisis Hotline</th>
              <th>24/7 hotline for teens</th>
              <th>1(800) 448-3000</th>
            </tr>
            <tr>
              <th>Transgender Suicide Hotline</th>
              <th>24/7 hotline for transgendered community</th>
              <th>(877) 565-8860</th>
            </tr>
            <tr>
              <th>Mental Health Telehealth/Counseling Services at the FSU</th>
              <th>
                Remotely attend counseling and psychiatric services from your
                home
              </th>
              <th>https://uhs.fsu.edu/telehealth-televisits</th>
            </tr>
            <tr>
              <th>Alcoholics Anonymous</th>
              <th>
                Remotely attend groups and access resources for people in
                Miami-Dade
              </th>
              <th>https://aamiamidade.org/ (online for COVID)</th>
            </tr>
            <tr>
              <th>Narcotics Anonymous</th>
              <th>
                Attend groups and access resources for people in Miami-Dade
              </th>
              <th>
                https://www.namiami.org/meetings/ (please check Online Meetings
                tab for Online COVID Meetings)
              </th>
            </tr>
            <tr>
              <th>Overeaters Anonymous</th>
              <th>
                Attend groups and access resources for people in Miami-Dade
              </th>
              <th>https://oa.org/find-a-meeting/?type=0</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
}