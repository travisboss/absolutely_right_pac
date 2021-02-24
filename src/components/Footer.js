import React from 'react';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <ul className="copyright container">
          <li className="item">
            <a href="/PrivacyPolicy">Privacy Policy</a>
          </li>
          <li className="item">
            <a
              href="https://www.termsfeed.com/live/6fae6007-67a3-4b50-b0ed-6b853baf7105"
              target="_blank"
              rel="noreferrer"
            >
              Terms and Conditions
            </a>
          </li>
        </ul>
        <p>
          PAID FOR BY ABSOLUTELY RIGHT AND NOT AUTHORIZED BY ANY CANDIDATE OR
          CANDIDATE’S COMMITTEE. 801 Twelve Oaks Center Drive Suite 806 Wayzata,
          MN 55391-4620
        </p>
        <p>
          Contributions to Absolutely Right are not tax deductible for income
          tax purposes. By making a contribution I am certifying I am a U.S.
          citizen or lawfully admitted permanent resident, that I am making this
          contribution with my own personal funds, and I will not be reimbursed
          by anyone for this contribution, I am not a federal government
          contractor or national bank, an am at least 18 years of age. Federal
          law requires Absolutely Right to use our best efforts to collect and
          report the name, mailing address, occupation and name of employer of
          individuals whose contributions exceed $200 in a calendar year.
        </p>
        <p>
          Refunds are not available for donations, payments or gifts. All
          transactions are final. However, our team can help research and
          resolve problems that arise with transactions. At the discretion of
          Absolutely Right a refund may be issued to a Donor. Any donation
          refunded from Absolutely Right to a Donor will be returned via the
          payment method the Donor used to make the donation or via a means
          outside of the Service such as a paper check. EACH DONOR ACKNOWLEDGES
          AND AGREES THAT ALL SERVICE CHARGES ARE NON-REFUNDABLE BY ANEDOT IN
          WHOLE OR IN PART.
        </p>
        <div className="container">
          <p style={{ width: '25%' }} className="item">
            contact(at)absolutelyright.org
          </p>
          <p className="item">(612) 568-7078‬</p>
        </div>
      </div>
    </section>
  );
}
