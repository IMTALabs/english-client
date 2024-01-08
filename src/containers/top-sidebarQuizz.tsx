

function TopSidebarQuizz() {


    return (
        <div className='flex justify-between items-center border-b-2 mb-3'>

            <img className='w-[200px] inline-block' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCABNAMYDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAIIBgcBAwUJBP/EAEEQAAEDAwMCAgUGCwkBAAAAAAEAAgMEBQYHCBESIRMxCRQiQVEyM2FxdIEVIzU2N0J1kbKztBZGU1djdpSh0dP/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQUGBAL/xAAtEQEAAQMCAgcJAQAAAAAAAAAAAQIDBAURMUEGEhUhUWFxEzU2UnKRsbLBwv/aAAwDAQACEQMRAD8A+qaIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgLCsl1fwfDs6tGAZRdBba++0zp6CafhtPK5r+nwi/n2XntxzwD5A88A5qqEekg/PXDv2XUfzQphT67qFzS8KrKtxvMTHdPOJmIlfdF8orBuw3BY1Z6WxWnUarFHRsEULZ6WnqHtYPIF8kbnEDyHJPA7KyW0DUzcLrJltXecvzuaXE7Ew+tM9QpYxVVDmnoiD2xggAe24g89mj9ZNlXgdL8XUL1GPat19aryjaPHv34R6LMaq6hw6dY3+EmRxT19TIIaSB5PD3ebnHjv0gef0kD3r8Ol2U6h5lTC95HaLbbbZI3mnayOQTT/Bw6nENZ9JHf3du68DLbfj5uFZqzq5XQ2/G7Iwtt1HUnhpYD85I3zc57vkxgcn2QRz2Xn7cNf6nXq8ZpW09rbb7JZZqOntcLgPGLHiYuklIPHU7pb7I7NAA79yYdFGTcu6lTF65NNNW8UURxqiImZqq8InlHPu828EUS9gPSXtB+HKB7HHpa8Ej3Ao0iSLhzmt7ucB9ZUTLGPORo+9BNFASxE8CRp+9SLmggFwBPkOfNByi4LmtHLiAPpUfFi/xGfvCCaKHixefiN/euRJGTwJGk/Wgki65qiCmZ4lRNHE3njqe4NH/al4jOA7rbwfI8+aCSKPiMA6utvHx5XLXNcOWuBH0FByiIgIiICIiAqEekg/PXDv2XUfzQr7qhHpIPz1w79l1H80KYZjph7ouetP7Q3bsat9BUberVLUUUEjzX1vLnxgn54+8qw0FNT0zDHTQRxNJ5LWNDRz8eyr5sPqIZtvdvjjka50FyrY5AD8lxk6uD9zgfvVh0lY6FEdm2Jj5Kfwqn6Rf9EOPjn+8cX9NULGfRsfkvPftFu/hnWTekX/AEQ4/wD7ki/pahYz6Nj8l599ot38M6nkzFz4to+n/Es31b08wm67y9H7tccaoqirrbfeauomezl0k1HHA+leT7zG4kt+C1VkNhtuke6zUTWjFaAUNFhlZj09+pqfqDJbZdIpmV8xaPNzZTFUc/6TirA6gac6xX7cJg+pmOx4f/Z3EYaqkeytrqplbNFWNjbUODGQuZ1MEZLB18OPyuF+HG9HNTKnV/U3ItQKLDqjDtRrfDap6ejrqp9Yynp4pYYuWPhazl8cpL+HnpPyefNeW9aT3pOZq7d7uwSmoxfS6Sy08gjf+Kqrxcq6mD2kjs8R0Z449xqFYKv2m6PX3M5slyfE7Vd7dDYrdYbTaaik5itsNK6Y8xu6u/WJWN44HAiHc89sKzPatkti0Ig0W0YuFsrDU3mK8XW65XXTCpnkiqIp2HqghcHn8SyPuG8MaPMrfk0uejChLT0VhOXepMJp31Uwt3rnSOpviiPxfC6ueHdHVxx2QVR2zbY9L85296e5lBj9uteVUt1iu5vbKXxKh/ql1fJ4ZPUOz44vD59wPPB44XVrNLLqBnef6z2W6xmq0OloqTGqc1IY2orKV7au7Do55cXRuFP5dyxbh0L091t0k0IGnlVFhNVkNmMrLNJFX1Ro5myTOlcahxgD2EGR4AY1wPS3uOTx4mkm1q12LTWpoNWdL9MslzkzVlSbrJSeuC4zSuMolqZpqcStJle8ENa4NYG8c+QDKdddO490egD8bxLI6e30+TxW+50VfNEZGeD1xztJa0g+00cefvVJ7rtK0ntu9nGdBBHdn4zcMddcKpvrzvGfUNgqHdQfxy0dUTTx9au9tnwPVPS/AxgGorsZkorRI5ljks9bUVD20z5ZH+DKZoo/mw5jGEc8tHfjjvqjJtt+4i57v7duHteV4VHZrbPDRQ00zp/WxaeC2eMsEBYZSyWYNPX5lvccIK97rdrlHoFtbtNPX303e4UGcVL7fUQ9UbI6Stp29cb2knqePUova+v4rPdEdsmh+YZBimpujNRlthq8CuVDdb3Df7fUAXBoHWI6fxOkDvG/2h1Acjt3C3ZvX0B1X3F4pYML0+vuNW+2UlbJcLm27vmY+SZrQ2nMTo4pOwD5+oHjnqb5+7F7TotvauuZYFWag6o4OcbxG601XU0dknq6aWqp2FodG8CBrZQWt4DXkDkoNPbc9HKPfVcMw1r14ye9VtPBd3261WekrPBho2dDZOB2PDWtkY1obxyWuc4uJXh55tiy3SLZpqLTamQuZPaMoo7vjoguAmaI3yR0pc8N7Dlkr/Z7d+D7lugbS9xGimdX6/7U9TsetuO5JUGqqbFfonmOneSSAzpikBDeSGuHQ7p4aerjlelqJt63c6laDXbTfLtWcPvN8yG9xVlc+ankgpqahja1zaeF8cPJPjRRv+bb26+SeUFZsx1C0Wr9j1o0poceziO+WhtLeoKqe2ytofwm88Tv8f5JiLZpukeXJarv7IsUtOK7ZcKFpbMPwvQtu1T4khfzUTcF5HwHYcD3LBco267hsg2g2jb4zKsLbfYHw0FwqXunFI+1QEmGONwg6/FBZT8uLBz0u79++3Ns+n+oGlmj1l0/1Hudmr7lZA6lp5bUXmEUjePCaS9jHFwHPJ6UG00REBERAREQFUL0hOmN7yLHLDqHZKKSqjx/x6e5NiaXOjp5OlzZSB+q1zXAn3dYPkCrerhzWvaWvaHAjggjkFHBqmBRqmJXi1ztFXPwmJ3ifu+TuiO5LUPQl1XTYu6jrbXXSCaot1cxzojLwB4jS0hzHcAAkHggDkHgcboHpHs9476d2Dn7RN/6rWXzbHoJkVa+4XPS6y+PIS57qeN1MHE+ZIiLQT9PC807Q9uX+WFF/wAup/8Aop3hj8fQNfwqPY42VTFEcOP9pnZozePltVnu13TzNK2kipZ71cqStkhiJLI3Po5yWgnvwOfepejY/Jee/aLd/DOrOX/RfTLKMRtWB37FIKuw2QsdQUTppWthLGFjeC1wceGucO5Pmu/T7SXTzSuOthwDGoLQy4ujdVCOWR/ilnV0k9bj5dTvL4putbeiZXa9vUblUTEU7Tx3merMTPDbiy9ERQ1QiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD//2Q==" alt="" />
            <div className='flex gap-2 items-center'>
                <svg
                    className='inline-block'
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 256 256"
                    style={{ fill: '#000000' }}
                >
                    <g fill="#10b981" fillRule="nonzero">
                        <g transform="scale(5.12,5.12)">
                            <path
                                d="M25,2c-12.682,0 -23,10.317 -23,23c0,12.683 10.318,23 23,23c12.682,0 23,-10.317 23,-23c0,-12.683 -10.318,-23 -23,-23zM37.735,12.679l-10.091,10.931c0.22,0.417 0.356,0.886 0.356,1.39c0,0.76 -0.292,1.447 -0.758,1.976l3.632,6.539c0.269,0.482 0.094,1.091 -0.388,1.359c-0.154,0.086 -0.321,0.126 -0.485,0.126c-0.352,0 -0.692,-0.186 -0.875,-0.515l-3.631,-6.535c-0.162,0.027 -0.325,0.05 -0.495,0.05c-1.657,0 -3,-1.343 -3,-3c0,-1.657 1.343,-3 3,-3c0.42,0 0.82,0.088 1.183,0.244l10.082,-10.923c0.375,-0.404 1.007,-0.431 1.413,-0.056c0.406,0.375 0.431,1.007 0.057,1.414z"
                            />
                        </g>
                    </g>
                </svg>

                <p><b>48</b> minutes remaining</p>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-file-break inline-block mr-2" viewBox="0 0 16 16">
                    <path d="M0 10.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5M12 0H4a2 2 0 0 0-2 2v7h1V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7h1V2a2 2 0 0 0-2-2m2 12h-1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2H2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-brightness-high inline-block mr-2" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-bell inline-block mr-2" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" className="bi bi-person-circle inline-block" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
            </div>


        </div>
    );
}

export default TopSidebarQuizz;
