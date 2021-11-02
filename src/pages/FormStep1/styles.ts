import styled from "styled-components"

export const Container = styled.div`
    p
    {
        font-size: 14px;
        color: #B8B8D4;
    }
    h1
    {
        margin: 0;
        padding: 0;
        font-size: 24px;
    }
    hr
    {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin: 30px 0;
    }

    label 
    {
        font-size: 13px;

        input 
        {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25CD89;
            border-radius: 10px;
            color: #FFF;
            outline: 0;
            font-size: 15px;
            background-color: #02044A;

            @media screen and (max-width: 768px)
            {
                width: 90%;
            }
        }
    }

    button
    {
        background-color: #25CD89;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        max-width: 200px;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin: 30px 0;

        @media screen and (max-width: 768px)
        {
            margin: 30px auto;
        }
    }

    @media screen and (max-width: 767px)
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;