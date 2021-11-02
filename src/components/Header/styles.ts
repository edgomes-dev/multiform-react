import styled from "styled-components"

export const Container = styled.div`
    padding: 25px 0;
    border-bottom: 1px solid #16195C;

    h1
    {
        margin: 0;
        padding: 0;
        font-size: 28px;
    }

    p
    {
        font-size: 14px;
        color: #B8B8D4;
    }

    @media screen and (max-width: 768px)
    {
        h1
        {
            font-size: 24px;
            text-align: center;
        }

        p
        {
            font-size: 12px;
            text-align: center;
        }
    }
`;