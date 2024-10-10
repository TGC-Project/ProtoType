import React from 'react';
import "./index.css";

function Products() {
 const sections = [
        {
          title: 'Electronics',
          products: [
            {
              title: 'Smartphone',
              description: 'Latest model with amazing features.',
              price: 699.99,
              imageUrl: 'data:image/jpeg;base64,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',
              rating: 4.5,
              reviews: 150
            },
            {
              title: 'Laptop',
              description: 'High performance laptop for work and play.',
              price: 999.99,
              imageUrl: 'https://dam.which.co.uk/IC19565-0716-00-front-2000x1500.jpg',
              rating: 4.7,
              reviews: 120
            },
            {
              title: 'Wireless Headphones',
              description: 'Enjoy your music without wires.',
              price: 199.99,
              imageUrl: 'https://m.media-amazon.com/images/I/61LKTD-YnrL._AC_UF1000,1000_QL80_.jpg',
              rating: 4.6,
              reviews: 200
            },
            {
              title: 'Smartphone',
              description: 'Latest model with amazing features.',
              price: 699.99,
              imageUrl: 'data:image/jpeg;base64,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',
              rating: 4.5,
              reviews: 150
            },
            {
              title: 'Laptop',
              description: 'High performance laptop for work and play.',
              price: 999.99,
              imageUrl: 'https://i0.wp.com/ekdonline.com/wp-content/uploads/2024/09/1-93.jpg?fit=800%2C800&ssl=1',
              rating: 4.7,
              reviews: 120
            }
          ]
        },
        {
          title: 'Fashion',
          products: [
            {
              title: 'T-Shirt',
              description: 'Comfortable cotton t-shirt.',
              price: 19.99,
              imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFGi-Zc2b6GFtARY9WnTc06cobuJMA5GutbU41j4XpWrYIa4MgMTRUJUSal6xRv7MY6I&usqp=CAU',
              rating: 4.8,
              reviews: 80
            },
            {
              title: 'Jeans',
              description: 'Stylish jeans for everyday wear.',
              price: 49.99,
              imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkwBwLREd9o2SnhxXokFg5dJivy4cD3gSzp_xLM5otSXhCwNsMGJmv8ms5XVvHbZgIeE&usqp=CAU',
              rating: 4.5,
              reviews: 100
            },
            {
              title: 'Sneakers',
              description: 'Fashionable sneakers for all occasions.',
              price: 89.99,
              imageUrl: 'https://baccabucci.com/cdn/shop/products/prductimg_2.png?v=1657611925',
              rating: 4.9,
              reviews: 60
            },
            {
              title: 'T-Shirt',
              description: 'Comfortable cotton t-shirt.',
              price: 19.99,
              imageUrl: 'https://teamsportdirect.co.uk/cdn/shop/files/Kelme-Triton-T-Shirt-Royal-White_800x.png?v=1718186562',
              rating: 4.8,
              reviews: 80
            },
            {
              title: 'Jeans',
              description: 'Stylish jeans for everyday wear.',
              price: 49.99,
              imageUrl: 'https://clutch-cafe.com/cdn/shop/files/Warehouse-Co_-Regular-Straight-800XX-Jeans-One-Wash-Jeans-Clutch-Cafe-London_1000x1000.jpg?v=1715098044',
              rating: 4.5,
              reviews: 100
            }
          ]
        },
        {
          title: 'Mobiles',
          products: [
            {
              title: 'Budget Smartphone',
              description: 'Affordable smartphone with great features.',
              price: 299.99,
              imageUrl: 'https://cdn.moglix.com/p/UuKuuUaF93sHU-xxlarge.jpg',
              rating: 4.2,
              reviews: 90
            },
            {
              title: 'Flagship Smartphone',
              description: 'Premium smartphone with top-notch performance.',
              price: 999.99,
              imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bUPYt0qQyZtiGPhF5zfQJpx-xHzZWpQcZw&s',
              rating: 4.8,
              reviews: 110
            },
            {
              title: 'Budget Smartphone',
              description: 'Affordable smartphone with great features.',
              price: 299.99,
              imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBUQDxIVFRAPFRUQDxAQFQ8PEBUPFREWFhUVFRUYHiggGBolGxUVITEhJSkrLjAuFx8zODMtNygtLisBCgoKDg0OGhAQFy0fHR0rLSstLS0rKy0rKy0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tKy0rKzc3LS0tNS03K//AABEIAPgAywMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAGAQIDBQcABP/EAEwQAAEDAgIFBgYPBgYCAwAAAAEAAgMEEQUhBhIxcbETIkFRYXMHMjSBkbIUFSQzNUJSVGJydKGzwtEjJZKiwdIWQ4KT4fBThBdVZP/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EACsRAAIBAgUEAgEEAwAAAAAAAAABAgMRBBIhMTITFDNRQXEiQ5Gx8CNCof/aAAwDAQACEQMRAD8ANdONKXRF0MTtXVye9ps7WI2A9izo42SbkXJ6XFznL26cyk1Eveyfc8j+iGWlV06cbJtXbJpzd9GXPt0fkj70vt0fkj0lU4Tgj6cfSBzP2W/tyfkj0lL7c/RHpKqAV66Ogml97jc4fKtZvncclko047pI1OT2LGDGOcOYCCQLXPSR2q80kqY4Qzk4wNYvuSXHYQMlTwaNTAhzyxoBBzOeR9Cuscw41IY2OSO7C85uB8Yjq3KWcqfUVrWHRUsjKA4x9AelyX23+gPS79U6p0Zq2C/J6w64yHfdt+5VJaQbEEEZEEEEHtCqSpy2SEvOty1GLfQHpd+qjxDE5TCRSxh87nCJrRrPOu4XsG3Vd/370a+B+ma51XK4Auin1WE52JjAJHmASMRGOisNot7lThWhGOvaHTTU8ROdiHSPA+lYjP0qw/wFi3z2n/2ZP7lqK5Iyx9Dbsy7/AAFi3z2D/Zk/uXHQHFvnsHV7zJ/ctQJQzpVpPHTsPOtbmlwzOt8hg6XLmor41OV2ZpjOitfTAmTE47MF3nVeGt7Cdbb2LzaOaNYvVsdKKnk4f8uWRrhygHxg2/i9pRlgmjMtY9tViDS2EHXp6Mnb1Pm6z2In0swd9TQzUsDxG+Rmqxwu1otbm5bAbW863IrarX+DnLXTb+TPIdAsTeNZmJRubmNZrXOFxtzDlL/8dYt/9iz+CT+5Xvgu0RqcPbUGoLB7IMepDCXOY3kw8FxJAzOsPQjglEqa9GOTMxi0ExVot7OhPa6J5PrJx0KxX57B/sv/ALlpTio3FEqUfQDqMzc6GYr88g/2X/3KCo0PxgDmVVO49To3NHpuVpTnKMlMVCHoB1ZGb6LY/ilDM+LEBzGDXtmY3MG0sOzgVtFFUtljZKw3ZI0Paewi4QNpjTtfQTuI50cb3NPSMsxfqVn4M6gnCKMnMmFtz5yp5wyOw6MsyuZppv5RL3sv4jkNtKI9N/KJe9l/EKGmq+HFEst2S3UlPE6R4ZGC57tgHV1nqHaoLEkNaLucQGgbdY7Fe4liLMMh5OOzq2UXe7bqA9P/AAhq1Mui3ChDNueiaKlogDUkS1BzbA2xA6tYdW9VFZpPVSmwfyUfQyKzSB1a230WVBQQT1DzqNfI8855ALjfrcegb1YyYbLH47Rlt1XRvI36pKXGnfWTuMcrbDmRtcbuGs47S8l7j5yiGuwD2OWNmjZ+0GsLAWt25Icjdax6jwRXpXjMEz4jBJrhrOde+RvsWVIJOyRylc9GHQFmcEskR6AxxLPO11wVaTlsjdWvY13Q2qjFi0dbrZt+8blSYOZHmzGl1tttg3nYEQR6zfGG+xa4fcUtxV9Ar3BnGMBkgs9p14CRqyN51hfK9uKJfAz4lb9p/IE6Gbkb2brU7vfYduqCfGZ1Z2uEvgftq12rs9lG27VFkM5NtJmxilsaCuXIa0u0hbBG5odmPGIzNzkGNHS4lKlKyHRjmZFpZpMyFha0m55vNzc952MYBtKr9HNGHukFZXi8wzggObIGnpI6ZO1P0V0fdrisrB+3I/YRHNsLD2fLKLkUY233/ugMpJ6LZf8ATrJVyQlNSFtnEqMlOJTCUaQtsa4qNxTnFROKYkA2NcVG4pzio3FNSFNng0nP7vqu4k9VerwX/A9H3I4lePSX4Pqu5k9VevwXn9z0fcjiVHiORVR4mcaceUS97J+I5DIKJdOPKJe9k/Echd5yVcOKES3ZbYHIyISVcmyEHV+tZAtXiD55nSyG7pHXuei5sPQiLS+fkqKOEbZLOcPN+pQTG9Rxnmm5Mpy2VgjrMWc5vsWIltPGec1txyjulz7eNn0JpoJY4mz6rmxvJDX2LWuLdoBVZh1S1j9ZwyuDnsyN817K7EwRqtc7k231Iy4ua0nb2LJN3ZpZYbUl4IOZbmNymik5wF+nap9F8FlEZmkaQHt5gIsS35VugLxVcZDnDqV3TfTUmJuszRbzY69/7FjtWCPxWjIGx8Z9vGO9WVLUPYA7MBwuCQW3HWL7QgjD6wRyAvF2jJw7FbzYwHGzTZgvqMudVgJGQvsChd7jfg0PDcR1htVn4H/FrvtR9QILwxzow3lLhz7O1Tk4NOwkdF0ZeB9wDK49Hsk3PZqBZLc2IZY9iYgjJvz3A6vYBtcewf1QjoxhhqpRWzg8kwn2Ix2xzthmI6RtAUeJOdX1YgBIiPPmcPi07TYDe92W66Noo2tAa0ANaAGtGwACwCXTV3m/YbUdlk/clC5JdddPSEtikppK4lMJRJANnEpjilJUbnI0gGxHFRuKUuUTnJqQps5xUTilc5RuKakLuePSQ/u+q7mT1V7PBeP3PR9yOJXh0jP7vqu5k9Ve3wXn9z0fcjiVBiOZZQ4mcaceUS97J+I5CkuxFGmjw6eRwzDpJCD2F5KFZtiqjwX0KfIg8I5/aRN6AzLzk/ohKMI38JsGcEo8V8dxxHFBcLVFTRU2egRg7VY4a+KNwdyTXuGY5QlzQeg6uwpW1MUDQBGJJzm4vzjZ1AN+MVDLi0js3NZb6LQ0fcnJxT1Fu4a4JjMkjzyxyI5xtsHQAAocToWXfKH805tGrm7rAN7A70N0teXC4NrdAyCJsDqw6MxvNwSb3K9CEuost9BEll1BqrjjJyBv13sT5l6cOqo4iHNja548V0hLmg9YbsUuI4vTQuLYImvlHjSSjWY09TGbDvKrZsVe/wAdrN7WBnosoajjew+N2i4biT3v13uJc4gknacwj7QCp1KOutkZKkMH+pgv9wKySKfnDeOK0vQxpdT1LBtfU6g3vYxg9ZInqw4u2od6HUepCZj41SdfPaIhlGPQL+cog1l54wGgNbsaABuAsE7XTYw0FSncm1l11DrpdZHlBzEhcmlyYXJpctUQWxxcoy5IXKJzkaiA2K5yic9c5yic5NSFtiuco3PTHPULno0gGyPSB3uCq7l/qqx8GHwPR9yOJVRjbr0FV3L/AFV7vBrXxNwmka52YhF/SV52K0mXYfWBm+kx5x3nih5yINJ/GO88VQBU0uC+kKnyZb4rS+y8JDm5y0Z1Xdeodh4LNGyEHctK0XxRsExbLnBUDkpgcwAdjvMhjTrRl1HOS3OF/OjeMwWlSSXTm17KYvMimwyjdPLqAgOcenIZnLzK3xidrKf2LJDEKiGSwqYXB2uzpBsc0OQyFpDmu1XDY4fqvW1oe7Wnla1vxi0F7yOwAWvvsstc0bRkgE9GxWUFa5rHau0g23ryVlUxxAibqRsGqwE3d2ucetNgkVEJZUA1c8UUnOzzvtztmele6sriWtYbfs8hYbR1k9K89RR53bax6+hS0VAzWDp5Q1gzIYC+Q9jcrA9pKQ4O4dx9MSbHrIt6Vrvg3F+VH/67/wAMOtxCyqpqBJK0RM1GDVbHGOcQ2/Sek9a0DBJXxUVXJGS1zagt1htbrRNaTvsSiS/JICb/ABZrRkGy4v5kussDgZVOAlY0DW5w1pniUg9qt6LSrEafxxLqjokAqWfxDMK1QsSORsoel10B4P4R4H82oaWdBkivIwH6TfGHoKMaWrjlaJIXtew7HMIcP+FmUzMevWTS5R6yaXLspuYe5yic5Nc9QuejSAbHveoHvTXvXnkkRpC2x75FA6RMfIvO+RFYW2S4q/3DVdy/1VX6FfB9N3TV6MQfeiqu5f6q8+hfwfTd01eTj+R6mD4A1pMecd54qgCItLoiyV7DtY97SRsuHEf0Q4Cq6fBfSFT5M5zbohwvFIZofYNfnGcoZtpYegHsQ+uLbrakFNWZ0ZOLKrSjRKalcS0a8Rza9mYIQ2tGpMVljbqHnx/IfmLdhXnqsNop884nn+H/ALusoZQnDfYpjKMgC1lLE9E8mhDj71NGR9Ilp8wseKRmgtQNr4wOsuc38pWKokwspQ8onU8D5HBsbSXONgACc0UwaKQMzqKgHrZGNY+n/hXNLiMNOC2ihDXbDNINZ+8dSZmlLSKBdlqzsBwGKgaKisAdUH3mnuCQTkHPV1o3SGfDsSHxhUGQeZgv9xKF3SOc/XeS5xIuTt2rQPBSAYq0HYagg7jGLolBwmm9xc55oOxnwqTqt3DLtAsvXS15UekmHmnnkiOxrtZnVqHNVcMma9hS0PJcdQkdRU83vjBrdD281484UUeF1tK7lqKQvA2sFmyW7R4rx6FHh8+aJ6CYZIZRQUZtEujunUUx5KpHJTbNY3EZd1OBzjdvyRW5yFMV0dgqm3PMmHizMA1tzh8Yb1T0GLVWHPFPWtL4D73I3MW62OPT9A+YpNh17h856he9Qx1THsD43BzHeK4dP6HsTHvRJANivkXne9JJIvNI9aA2OkevO+RMkkXnfItAbPXVvvR1Pcv9VdoZ8H0/dNUEjr0dT3L+CutAMFfJhlK8OaA6Jpsb9oXk46+c9bB8AM0zlDp5HDY6R7hfbYvJ/qhlX+lHjneeKH1XT4L6QuXJjkoTbrgjBHriEl0t1xw+nbz2/Wb2fGCKNNqZreT1Ra75R6HCyGYPHb9ZvrBFeneyP683rBS1EutEdFvIwSDQnJoKW6pEj2HMbxxWg+Cp37Ks+0/kas9YcxvHFH3gwNoqz7T+RqTPmg1wY7wj4VykQqWDnQ5SW2mI/ostcbFbxLquBa4XDgQR1jpWO6V4QaeZzPi+NGethP8ATYrYPSxCyCjnRHh1UgyCSxV1h9Smp3FtGg4fUXVtPRxTxmKZoex2RaeI6ihDDKnYinD50uaCiwOrKKpwqTWbeWhkOZ6W9Qf1O6nelX8NYyVgkjN2O2HpB+SR0FFfJskYWPAcxws5pzBB6LLOcbwiXCpTNCDJQS5SMvnHnsPUOp3mOSXGWtmMauWz3rzySKMztc1skbtaN+bXdPaD1OHSOxQPkTUIeg6R6873pHvXnc9aDcsQ73JU9y/givwc4sxmFUjCHXbCAbW6yg+I+5KnuX8Fa6En93U3dNXkY92noevglemC+ljS2RzXCzmucCO0GyHAinTrymbvZPxChUKunxX0gJbsclCauRgj0oKalWHEsHjt+s31girTo5RfXm9YIThPOb9ZvrBFWnByi+tLxCmq+aI6PBgslTAnXVIkc3aN6PPBsbQ1n2n8jUBN2jejnweG0NZ9p/I1Kl5Ihf6MJjIqfSfDBUwkAftGc6M8Wr3OkScoq0QXMYqIyxxByIXopJkT6cYN/nxjI+P2HrQXG+xTAt0GOGVWxFuF1OxZxQVKK8Lq9i16i9jQqOZWLo2yMLHtDmuFnNOwi1rIaw2pV/TSqaaGxkZnjGFOwqe2b8NqXZEZmKToHYR0HpGS6pGqRmCHAOY4eK5h2OC1KvoYqiF0MzQ6OQargfuI7QsnkoX0c5w6pdeN930FQ7xcz4pPUdh6jY9K2nP4NqQzK6I3PUZcllBaS1wsWmxB2ghREqgkZZU59y1Pcv4Ih0EoZXYbTOawkGJpBuEOUp9y1Pcv4LRfBh8D0fcjiV5GOjeZ7GDf+MzHTrymbvZPXKFUU6d+VTd7J+IUKqqnxQMt2OXJEt0YIoSpoKVYcSxeM3e31gifTY5Rb5OIQtH4zd49YIl0z2Rb5OIU9TzRGx8bBsJyYEqoFD2HMb0baBOtBV/afyBBDNo3oz0HP7Cr+0/kCW/JE1+NlyZE3XXmMiQyK08+5NO0PaWOza4WP6rMsfw0wSkdBN2nsWjcoqzH6ATxEfHZm3tXGp2YAU0xBRDhlWhiRpa4g7QvbR1FitQUl8mk4XWbEVUNTdZphdbsRfhdYhlEFOwa08qrdL9HmV1MYzlK3nwSdLJBsz6j0p1HPdWkMimlGzuPjIxtj3ysc2UatXSHk6lvS5gybL2kbD5j1ry3Rn4RcKMMjMTgbcstFWRjZJEcg7fa4Pm6kI1kbWuuw3jkAkid1xuzHozG8KinK6J6sbanvoz7lqe5fwWjeC/4Ho+5HErOKI+5anuX8FpHgv8Agej7kcSvOxfM9LB+My/TvyqbvpPxChRFWnflU3eyeuUKKinxRkt2OulTVyMEddKm3S3WHEkZzG8esER6YnKLe/iENxnMbxxCItMD71/r4hT1PNEdDxsHrpUwJwVAkezaN6MNDTanq/tP5Ag5hzG9F2iR9z1f2n8jUt+SJsvGz1F67XXnL0murjzbno11wevPrJNdccDmluHWPKsGTvG7ChyJ9loVQwPYWO2O+49aAK+nMchaegrn7HQd9C0w+psizCqzZmgGmlsr7Dqqy5agyVjTsNq9iIKaZZ9hVZsRZQVF0qcTYsv5oWyxujeLskaWOHW0rHZaJ0L5qJ/jUrjLAekwPILgOzY7+LrWvU8iB/CbScnJT17R4p5CftjdmCfS8ecJcNJBS1RRUXktT3L+C0jwYfA9H3I4lZzDHqwVTeqKQDpytlxWj+C8fuej7kcSpMXzLsHwMt078qm72T8QoUKKtPPKpu9k/EKFCqKfFAy3YoSpFyMEclTUqw4fHtG8cQiLS45Rf6+IQ5GcxvHFEOlmyLc/iFNU80R0eDB+6UJqW6pEj2bRvRbosfc9V9p/I1CLNoRZoyfc1V9p/I1LflibLxyOL0msoi5JrK48slL0muotZJrLTSYvVJpPS6zRKBmOa/8AoVaFyY8BwLTscLefo+9bYJOwDxusVY0k1l4KuIseWnoKdA9KTsx8ldXDHC6pF+F1azehnsijC6tE1cU9DR6Ke6h0toxPQTR2udQub9dvOHBVuGVav43BzC35QIPnBH9UmSsw4szDDJdahkd10zwd7Lsz/hv51pvgv+B6PuRxKy7CRakqmfI9kAbgxg43Wn+C8/uej7kcSocXzPQwvAyzTw+6pu+k/EKFUVaeeVT99J65QoVTT4oCW7FSpoRFW6ONZDriRxe2LlnXYOTyMeTXX6pMj2FE2CD4SpqVccPZtG8cQiDSw+9f6uIQ8zaN44og0qOUW5/EKap5ojocGUCUFNCW6pEj2bRvHFFejh9zVX2n8gQmzaN44or0d8mqvtP5AlvyxNl45EDimlyY5yYXK88skLk0vUZcmly00kLkmuoi5JrLjSp0lh5wePjjPeqaNyJcWZrQnrYb+Yj/AIQsDmlT0ZTT1RZ00ivMPqUMxOVnSTIosCSD/CqvYjDDKi9lmWG1WxGOGVlmFxPitJ9AQtXBQMUfvNb/AOxwC03wYfA9H3I4lZZhT701SflxSvO91/6Bq1PwYfA9H3I4ledi+Z6eF4GV6eeVT99J65QoirTzyufvpPxChQqinxQuW7FuirF5i2n5Br4eSbHG5sbpqp84c5jSSGF+pe56rWQoVd4fU8rSStOoZIWEi7KcPMYcBzTyZcbXHxlrBKdcmpbrThzNo3jiiDSo+9bnf0Q+3aN44q90pOUW53EKap5ojocGUa5IlVIkczaN4RXo/wCS1X2n8jUKM2jeOKKsCPuWq+0/kal/qxNl45HhcU0uTXOUZcvQPNsPLk0uUZcmFy40lL03WUZcmly44nObHjrafuIKEZRmUVwHb9V3qlC1R4x3lLqbD6Isbl7IJFXtKniegiw5IIaCfMIjqKstpXWPOltG3e7b9wQhh7rkK2r6mwAGyIao75wz9A4py2ENanuwxw5CpA2CF4G4NsFq3gw+B6PuRxKyPAj7nqO5fwWueDD4Ho+5HErysXzPSwvAyrTzyufvpPxChNFenvlc/fSfiFCiop8UBLdiqGlq3NLg02EgLHNB+IXXItvaFKoo2EHY3fY6y1mEwKW6QJVpgrdo3jir7SjZFudxCoGnMbxxCvtKD71udxCmqeaI6HBlGlTbrgqRKHs2jeOKKcEPuWq+0/kahZm0bxxRRg59y1X2n8jUv9WJsvHIrHOUZckc5RlyvPPHFyYXJhcmFy44lLk0uUZck1lxp6YHeMepjvvFv6oZndziUQF9opHdgYN5Nz6v3obkdml1dh1FCgqWMqAFeqkiueKCOrGy0LbDARmBdxyaPpFdWTAu1Wm7WXF/lP8AjO9OW4DqTppOSYLe+SN5o6WRHaT2u4LwNcnXJ7BRgB9z1Hcv4LX/AAX/AAPR9yOJWPaOn3PUdy/gth8F/wAD0fcjiV5WL5no4bgZTp55XP30n4hQmUV6fi1ZOD/5XnzF10JlU0+KFy3YoSpFyMEVddIuWHDwcxvHFX2lP+VudxCoBtG8cQr/AEr/AMrc7iFNU80R0ODKFckSqkSOYcxvHFFGFeS1X2n8jULNOaJMOmApqgH489x1X5NpS3pUiE9acipe5ROcleVEXK888UuTCUhKaSsNHXXXTbqSnZrOA6Np+qNq46wzFH6sTWdLrvPn2fch8lWGL1Ou8no2DcFXNzKRVleViqlGyJYW3KvKSNkbOUkF2jJrf/I8dA+iOk7gvLQQNa0ySZMbtPSfot6yfuzXlrKwyOucgBqsaNjW9AC1Oxj/ACZLNUOe4vcbucblKxy8rSpWORJgtBZo4fc9R3L+C2TwYfA9H3I4lYvo48chOOkwv4LbfBnTkYRRg3B5Ftx5yvOxT/Muw6tAG/CloPLM41dI3WeR+0jFyTbpACyR2E1gNjTvuMjfVB9BN1y5BGrKOiNlBM72rq/m7/5f1Se1lV83f/L+qVci7iXoHpo4YZVfN3/y/qu9rKv5u/8Al/VcuXdzL0d00OZhlVcXgfa4uebsvmdqINLIHyclyEb36rSH83VsTbrSLkt1W5phxglFlB7WVfzd/wB36rva2r+bv/l/VIuTXXkgOlEUYbVfN3/y/qrT2FUSUj4jE5kgIfd1hrWFsiNhXLkmtWk43DpwRTQYHiVviH6zhdPOBYn8iP0rlyX3VRfIzt6b+DvaHEvkR+lJ7QYl8iP0pVy3uqvs3t6foT/D+JfJj9KezBMTAIDI+dkTfOy5cu7qp7O7en6PG/RLEDtaz+IJY9Eq9pvqx+dyVch7mp7O6UfRJU6NYi+2s1lmizQHWGe0269mfYFANEa/5DP4guXLu5qezulH0OGimIfIZ/EFx0XxAfFZ/EEq5d3NT2c6MPQX+DjQytke5s0ZEbxqvkcDq6p2hp6fMt/oqVsUbIoxZkbQxoHQALBcuRJuWrMatsf/2Q==',
              rating: 4.2,
              reviews: 90
            },
            {
              title: 'Flagship Smartphone',
              description: 'Premium smartphone with top-notch performance.',
              price: 999.99,
              imageUrl: 'https://www.mobiledokan.co/wp-content/uploads/2020/08/Oppo-A53-Fancy-Blue-500x500.jpg',
              rating: 4.8,
              reviews: 110
            },
            {
              title: 'Flagship Smartphone',
              description: 'Premium smartphone with top-notch performance.',
              price: 999.99,
              imageUrl: 'data:image/jpeg;base64,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',
              rating: 4.8,
              reviews: 110
            }
          ]
        },
        {
          title: 'Toys',
          products: [
            {
              title: 'Building Blocks',
              description: 'Creative building blocks for kids.',
              price: 29.99,
              imageUrl: 'https://snugnplay.com/cdn/shop/articles/Top-Rated_Baby_Toys.png?v=1685429856',
              rating: 4.7,
              reviews: 130
            },
            {
              title: 'Action Figure',
              description: 'Cool action figure for collectors.',
              price: 15.99,
              imageUrl: 'https://www.peekaboo.ke/cdn/shop/products/Pibi_Kids_Push_Friction_Powered_Monster_Truck_with_Color_Box_Assorted_Age-_3_Years_Above_2_800x.webp?v=1691593411',
              rating: 4.5,
              reviews: 200
            },
            {
              title: 'Building Blocks',
              description: 'Creative building blocks for kids.',
              price: 29.99,
              imageUrl: 'https://media.istockphoto.com/id/177558624/photo/toys-collection.jpg?s=170667a&w=0&k=20&c=TMDRXyvqLDCo4evliQzWTmbN_7yD2HFcXw-EvDH72e4=',
              rating: 4.7,
              reviews: 130
            },
            {
              title: 'Action Figure',
              description: 'Cool action figure for collectors.',
              price: 15.99,
              imageUrl: 'https://snugnplay.com/cdn/shop/articles/Top-Rated_Baby_Toys.png?v=1685429856',
              rating: 4.5,
              reviews: 200
            },
            {
              title: 'Building Blocks',
              description: 'Creative building blocks for kids.',
              price: 29.99,
              imageUrl: 'https://media.istockphoto.com/id/177558624/photo/toys-collection.jpg?s=170667a&w=0&k=20&c=TMDRXyvqLDCo4evliQzWTmbN_7yD2HFcXw-EvDH72e4=',
              rating: 4.7,
              reviews: 130
            },
          ]
        }
      ];
    

  const addToCart = (product) => {
    console.log(`Added ${product.title} to cart!`);
  };

  return (
    <div className="product-page">
      {sections.map((section) => (
        <div key={section.title} className="product-container">
          <h2 className="section-title">{section.title}</h2>
          <div className="product-list">
            {section.products.map((product) => (
              <div key={product.title} className="product">
                <div className="product-image">
                  <img src={product.imageUrl} alt={product.title} />
                </div>
                <div className="product-details">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <p className="product-rating">
                    Rating: {product.rating} ({product.reviews} reviews)
                  </p>
                  <p className="product-description">{product.description}</p>
                  <button
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                  >
                    Get Best Price
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
