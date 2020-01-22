
    function initMap() {
      var errorMessage = document.getElementById('error-message');
      var latLng = {lat: 36.849389, lng: -119.795557};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        scrollwheel: false,
        center: latLng,
      });

      // the polygon overlay for the map
      var boundary = [
        new google.maps.LatLng(37.550481, -119.850082),
        new google.maps.LatLng(37.627964, -119.92726),
        new google.maps.LatLng(37.675032, -120.004594),
        new google.maps.LatLng(37.696245, -120.100555),
        new google.maps.LatLng(37.702104, -120.218871),
        new google.maps.LatLng(37.695622, -120.39567),
        new google.maps.LatLng(37.693681, -120.500408),
        new google.maps.LatLng(37.704418, -120.567),
        new google.maps.LatLng(37.725142, -120.603452),
        new google.maps.LatLng(37.751747, -120.643861),
        new google.maps.LatLng(37.767761, -120.67235),
        new google.maps.LatLng(37.792426, -120.699369),
        new google.maps.LatLng(37.811264, -120.71659),
        new google.maps.LatLng(37.828497, -120.737703),
        new google.maps.LatLng(37.850431, -120.762835),
        new google.maps.LatLng(37.877121, -120.786098),
        new google.maps.LatLng(37.901445, -120.810347),
        new google.maps.LatLng(37.931274, -120.836658),
        new google.maps.LatLng(37.957601, -120.861025),
        new google.maps.LatLng(37.984998, -120.883558),
        new google.maps.LatLng(38.025671, -120.925997),
        new google.maps.LatLng(38.065368, -120.956143),
        new google.maps.LatLng(38.10424, -120.984965),
        new google.maps.LatLng(38.148227, -121.032587),
        new google.maps.LatLng(38.172553, -121.07681),
        new google.maps.LatLng(38.187938, -121.11697),
        new google.maps.LatLng(38.193673, -121.162899),
        new google.maps.LatLng(38.194319, -121.195334),
        new google.maps.LatLng(38.196441, -121.228498),
        new google.maps.LatLng(38.193764, -121.256857),
        new google.maps.LatLng(38.177241, -121.331619),
        new google.maps.LatLng(38.140654, -121.397731),
        new google.maps.LatLng(38.123319, -121.418731),
        new google.maps.LatLng(38.097646, -121.436407),
        new google.maps.LatLng(38.054982, -121.454186),
        new google.maps.LatLng(38.023288, -121.464178),
        new google.maps.LatLng(37.991347, -121.478615),
        new google.maps.LatLng(37.969799, -121.490154),
        new google.maps.LatLng(37.947634, -121.506847),
        new google.maps.LatLng(37.925953, -121.528475),
        new google.maps.LatLng(37.896123, -121.567466),
        new google.maps.LatLng(37.84904, -121.596779),
        new google.maps.LatLng(37.805555, -121.604016),
        new google.maps.LatLng(37.769598, -121.590264),
        new google.maps.LatLng(37.717269, -121.554682),
        new google.maps.LatLng(37.683084, -121.522443),
        new google.maps.LatLng(37.663252, -121.505277),
        new google.maps.LatLng(37.632633, -121.453956),
        new google.maps.LatLng(37.469379, -121.252937),
        new google.maps.LatLng(37.427911, -121.222539),
        new google.maps.LatLng(37.375816, -121.203464),
        new google.maps.LatLng(37.362969, -121.1965),
        new google.maps.LatLng(37.337757, -121.188209),
        new google.maps.LatLng(37.310922, -121.181744),
        new google.maps.LatLng(37.278052, -121.172608),
        new google.maps.LatLng(37.244428, -121.161476),
        new google.maps.LatLng(37.192082, -121.148015),
        new google.maps.LatLng(37.135127, -121.135824),
        new google.maps.LatLng(37.078644, -121.10866),
        new google.maps.LatLng(37.01499, -121.081086),
        new google.maps.LatLng(36.966521, -121.054759),
        new google.maps.LatLng(36.924274, -121.026686),
        new google.maps.LatLng(36.887587, -120.994206),
        new google.maps.LatLng(36.858778, -120.968312),
        new google.maps.LatLng(36.834895, -120.940482),
        new google.maps.LatLng(36.808343, -120.909062),
        new google.maps.LatLng(36.782734, -120.872978),
        new google.maps.LatLng(36.762074, -120.825519),
        new google.maps.LatLng(36.753503, -120.797696),
        new google.maps.LatLng(36.744093, -120.769395),
        new google.maps.LatLng(36.733502, -120.752263),
        new google.maps.LatLng(36.682126, -120.707722),
        new google.maps.LatLng(36.656327, -120.692262),
        new google.maps.LatLng(36.631241, -120.668798),
        new google.maps.LatLng(36.609504, -120.642307),
        new google.maps.LatLng(36.598488, -120.632042),
        new google.maps.LatLng(36.587127, -120.62231),
        new google.maps.LatLng(36.571785, -120.604863),
        new google.maps.LatLng(36.559708, -120.588629),
        new google.maps.LatLng(36.547634, -120.573086),
        new google.maps.LatLng(36.533135, -120.550984),
        new google.maps.LatLng(36.511555, -120.521799),
        new google.maps.LatLng(36.497282, -120.50685),
        new google.maps.LatLng(36.484775, -120.498574),
        new google.maps.LatLng(36.473144, -120.492209),
        new google.maps.LatLng(36.455386, -120.481403),
        new google.maps.LatLng(36.437904, -120.471469),
        new google.maps.LatLng(36.413323, -120.455447),
        new google.maps.LatLng(36.39103, -120.442019),
        new google.maps.LatLng(36.365997, -120.427858),
        new google.maps.LatLng(36.341587, -120.416183),
        new google.maps.LatLng(36.316855, -120.406957),
        new google.maps.LatLng(36.28364, -120.400824),
        new google.maps.LatLng(36.274245, -120.402594),
        new google.maps.LatLng(36.263583, -120.405889),
        new google.maps.LatLng(36.246942, -120.415481),
        new google.maps.LatLng(36.230372, -120.419154),
        new google.maps.LatLng(36.212178, -120.421231),
        new google.maps.LatLng(36.190276, -120.425278),
        new google.maps.LatLng(36.169109, -120.427175),
        new google.maps.LatLng(36.150124, -120.423378),
        new google.maps.LatLng(36.132915, -120.410616),
        new google.maps.LatLng(36.117306, -120.390785),
        new google.maps.LatLng(36.10402, -120.368225),
        new google.maps.LatLng(36.083777, -120.326731),
        new google.maps.LatLng(36.054586, -120.262492),
        new google.maps.LatLng(36.033176, -120.230957),
        new google.maps.LatLng(36.019931, -120.21223),
        new google.maps.LatLng(36.006685, -120.193044),
        new google.maps.LatLng(36.006403, -120.193043),
        new google.maps.LatLng(35.994848, -120.177333),
        new google.maps.LatLng(35.985828, -120.156767),
        new google.maps.LatLng(35.985534, -120.143921),
        new google.maps.LatLng(35.989477, -120.13243),
        new google.maps.LatLng(35.995967, -120.12437),
        new google.maps.LatLng(36.007241, -120.098859),
        new google.maps.LatLng(36.018227, -120.081018),
        new google.maps.LatLng(36.02267, -120.065069),
        new google.maps.LatLng(36.02046, -120.050998),
        new google.maps.LatLng(36.014676, -120.032158),
        new google.maps.LatLng(36.00899, -120.020269),
        new google.maps.LatLng(36.001183, -120.006275),
        new google.maps.LatLng(35.99037, -119.988361),
        new google.maps.LatLng(35.980644, -119.978399),
        new google.maps.LatLng(35.970667, -119.968598),
        new google.maps.LatLng(35.957906, -119.958178),
        new google.maps.LatLng(35.944259, -119.947446),
        new google.maps.LatLng(35.929452, -119.936396),
        new google.maps.LatLng(35.910605, -119.923492),
        new google.maps.LatLng(35.890816, -119.875323),
        new google.maps.LatLng(35.888783, -119.81879),
        new google.maps.LatLng(35.895435, -119.768948),
        new google.maps.LatLng(35.8828, -119.730512),
        new google.maps.LatLng(35.875027, -119.698082),
        new google.maps.LatLng(35.86808, -119.664552),
        new google.maps.LatLng(35.860273, -119.637072),
        new google.maps.LatLng(35.838916, -119.625892),
        new google.maps.LatLng(35.812071, -119.611346),
        new google.maps.LatLng(35.792139, -119.601396),
        new google.maps.LatLng(35.778, -119.61535),
        new google.maps.LatLng(35.759533, -119.674235),
        new google.maps.LatLng(35.737915, -119.739032),
        new google.maps.LatLng(35.703117, -119.787019),
        new google.maps.LatLng(35.648414, -119.844022),
        new google.maps.LatLng(35.584588, -119.878607),
        new google.maps.LatLng(35.551082, -119.886164),
        new google.maps.LatLng(35.532409, -119.890042),
        new google.maps.LatLng(35.509367, -119.889907),
        new google.maps.LatLng(35.494317, -119.889982),
        new google.maps.LatLng(35.475987, -119.88606),
        new google.maps.LatLng(35.451958, -119.87926),
        new google.maps.LatLng(35.430673, -119.867261),
        new google.maps.LatLng(35.405323, -119.84924),
        new google.maps.LatLng(35.38629, -119.827124),
        new google.maps.LatLng(35.373413, -119.805923),
        new google.maps.LatLng(35.363278, -119.780464),
        new google.maps.LatLng(35.351031, -119.747063),
        new google.maps.LatLng(35.334884, -119.717874),
        new google.maps.LatLng(35.316163, -119.689453),
        new google.maps.LatLng(35.296242, -119.671568),
        new google.maps.LatLng(35.27777, -119.661059),
        new google.maps.LatLng(35.250776, -119.642961),
        new google.maps.LatLng(35.235692, -119.634993),
        new google.maps.LatLng(35.216665, -119.614298),
        new google.maps.LatLng(35.200459, -119.600761),
        new google.maps.LatLng(35.18533, -119.584016),
        new google.maps.LatLng(35.176089, -119.572618),
        new google.maps.LatLng(35.164165, -119.554009),
        new google.maps.LatLng(35.153157, -119.537929),
        new google.maps.LatLng(35.14028, -119.512394),
        new google.maps.LatLng(35.134284, -119.499633),
        new google.maps.LatLng(35.123821, -119.483419),
        new google.maps.LatLng(35.112433, -119.470598),
        new google.maps.LatLng(35.100874, -119.454588),
        new google.maps.LatLng(35.0917, -119.44517),
        new google.maps.LatLng(35.082449, -119.435999),
        new google.maps.LatLng(35.045763, -119.377362),
        new google.maps.LatLng(35.03165, -119.359718),
        new google.maps.LatLng(35.018292, -119.342796),
        new google.maps.LatLng(35.005862, -119.321331),
        new google.maps.LatLng(34.998246, -119.309511),
        new google.maps.LatLng(34.988928, -119.293471),
        new google.maps.LatLng(34.981439, -119.280563),
        new google.maps.LatLng(34.973083, -119.263105),
        new google.maps.LatLng(34.963569, -119.241603),
        new google.maps.LatLng(34.949178, -119.192277),
        new google.maps.LatLng(34.933895, -119.130561),
        new google.maps.LatLng(34.926921, -119.090311),
        new google.maps.LatLng(34.925077, -119.052792),
        new google.maps.LatLng(34.924853, -119.02126),
        new google.maps.LatLng(34.927348, -118.982986),
        new google.maps.LatLng(34.931097, -118.957025),
        new google.maps.LatLng(34.936503, -118.922347),
        new google.maps.LatLng(34.945178, -118.889709),
        new google.maps.LatLng(34.957409, -118.851517),
        new google.maps.LatLng(34.978665, -118.818572),
        new google.maps.LatLng(34.998625, -118.800125),
        new google.maps.LatLng(35.019252, -118.787821),
        new google.maps.LatLng(35.051511, -118.780063),
        new google.maps.LatLng(35.070756, -118.777219),
        new google.maps.LatLng(35.072234, -118.776829),
        new google.maps.LatLng(35.094708, -118.772113),
        new google.maps.LatLng(35.131544, -118.766398),
        new google.maps.LatLng(35.174591, -118.754368),
        new google.maps.LatLng(35.199303, -118.745049),
        new google.maps.LatLng(35.219655, -118.733795),
        new google.maps.LatLng(35.238745, -118.730553),
        new google.maps.LatLng(35.257617, -118.731251),
        new google.maps.LatLng(35.273126, -118.737219),
        new google.maps.LatLng(35.282193, -118.740164),
        new google.maps.LatLng(35.301637, -118.745014),
        new google.maps.LatLng(35.337253, -118.748098),
        new google.maps.LatLng(35.362224, -118.743851),
        new google.maps.LatLng(35.385111, -118.737419),
        new google.maps.LatLng(35.398886, -118.734121),
        new google.maps.LatLng(35.410147, -118.735203),
        new google.maps.LatLng(35.420237, -118.739936),
        new google.maps.LatLng(35.429061, -118.746474),
        new google.maps.LatLng(35.435484, -118.755452),
        new google.maps.LatLng(35.439528, -118.766544),
        new google.maps.LatLng(35.44655, -118.783925),
        new google.maps.LatLng(35.455642, -118.804312),
        new google.maps.LatLng(35.4741, -118.832831),
        new google.maps.LatLng(35.495537, -118.860072),
        new google.maps.LatLng(35.513148, -118.882112),
        new google.maps.LatLng(35.538004, -118.911234),
        new google.maps.LatLng(35.571519, -118.948875),
        new google.maps.LatLng(35.589368, -118.969074),
        new google.maps.LatLng(35.59758, -118.976402),
        new google.maps.LatLng(35.609106, -118.983857),
        new google.maps.LatLng(35.623001, -118.990924),
        new google.maps.LatLng(35.634746, -118.995165),
        new google.maps.LatLng(35.647219, -118.996326),
        new google.maps.LatLng(35.658112, -118.995611),
        new google.maps.LatLng(35.677847, -118.992684),
        new google.maps.LatLng(35.743734, -118.991186),
        new google.maps.LatLng(35.776319, -118.9936),
        new google.maps.LatLng(35.803168, -118.989371),
        new google.maps.LatLng(35.816572, -118.983833),
        new google.maps.LatLng(35.827461, -118.977454),
        new google.maps.LatLng(35.848524, -118.960879),
        new google.maps.LatLng(35.866893, -118.938849),
        new google.maps.LatLng(35.886475, -118.91545),
        new google.maps.LatLng(35.901639, -118.897867),
        new google.maps.LatLng(35.912483, -118.889435),
        new google.maps.LatLng(35.920864, -118.884317),
        new google.maps.LatLng(35.930928, -118.881191),
        new google.maps.LatLng(35.942256, -118.881407),
        new google.maps.LatLng(35.95388, -118.880627),
        new google.maps.LatLng(35.967603, -118.881792),
        new google.maps.LatLng(35.979121, -118.881984),
        new google.maps.LatLng(36.004404, -118.88398),
        new google.maps.LatLng(36.010895, -118.885086),
        new google.maps.LatLng(36.016365, -118.888041),
        new google.maps.LatLng(36.021288, -118.891106),
        new google.maps.LatLng(36.02495, -118.894465),
        new google.maps.LatLng(36.027471, -118.897887),
        new google.maps.LatLng(36.031589, -118.905477),
        new google.maps.LatLng(36.038867, -118.918633),
        new google.maps.LatLng(36.045535, -118.931853),
        new google.maps.LatLng(36.051531, -118.943188),
        new google.maps.LatLng(36.054176, -118.950579),
        new google.maps.LatLng(36.057994, -118.95898),
        new google.maps.LatLng(36.060542, -118.962498),
        new google.maps.LatLng(36.062665, -118.964665),
        new google.maps.LatLng(36.065626, -118.966509),
        new google.maps.LatLng(36.06936, -118.969832),
        new google.maps.LatLng(36.071715, -118.972108),
        new google.maps.LatLng(36.075715, -118.975356),
        new google.maps.LatLng(36.080055, -118.979595),
        new google.maps.LatLng(36.087079, -118.984823),
        new google.maps.LatLng(36.098664, -118.993567),
        new google.maps.LatLng(36.107903, -118.997412),
        new google.maps.LatLng(36.10828, -118.997534),
        new google.maps.LatLng(36.114015, -118.998778),
        new google.maps.LatLng(36.120333, -118.998311),
        new google.maps.LatLng(36.124524, -118.997528),
        new google.maps.LatLng(36.130024, -118.99663),
        new google.maps.LatLng(36.144915, -118.992575),
        new google.maps.LatLng(36.158986, -118.986777),
        new google.maps.LatLng(36.173546, -118.980905),
        new google.maps.LatLng(36.189215, -118.97514),
        new google.maps.LatLng(36.200559, -118.972217),
        new google.maps.LatLng(36.205925, -118.971811),
        new google.maps.LatLng(36.211919, -118.97372),
        new google.maps.LatLng(36.221895, -118.975141),
        new google.maps.LatLng(36.235525, -118.979067),
        new google.maps.LatLng(36.25854, -118.986743),
        new google.maps.LatLng(36.267963, -118.988255),
        new google.maps.LatLng(36.293139, -118.992925),
        new google.maps.LatLng(36.347437, -118.999049),
        new google.maps.LatLng(36.394378, -119.011107),
        new google.maps.LatLng(36.428511, -119.045775),
        new google.maps.LatLng(36.45622, -119.07317),
        new google.maps.LatLng(36.464346, -119.078265),
        new google.maps.LatLng(36.483346, -119.092382),
        new google.maps.LatLng(36.508213, -119.114167),
        new google.maps.LatLng(36.523078, -119.130452),
        new google.maps.LatLng(36.537338, -119.142044),
        new google.maps.LatLng(36.544757, -119.145445),
        new google.maps.LatLng(36.552376, -119.148414),
        new google.maps.LatLng(36.559251, -119.150464),
        new google.maps.LatLng(36.566469, -119.15112),
        new google.maps.LatLng(36.582107, -119.151299),
        new google.maps.LatLng(36.596022, -119.145699),
        new google.maps.LatLng(36.596407, -119.145558),
        new google.maps.LatLng(36.607605, -119.141779),
        new google.maps.LatLng(36.621836, -119.132771),
        new google.maps.LatLng(36.628354,  -119.118113),
        new google.maps.LatLng(36.634926,  -119.10222),
        new google.maps.LatLng(36.637207,  -119.079839),
        new google.maps.LatLng(36.639037,  -119.062386),
        new google.maps.LatLng(36.643123,  -119.044521),
        new google.maps.LatLng(36.656961,  -119.027247),
        new google.maps.LatLng(36.670418,  -119.023139),
        new google.maps.LatLng(36.682965,  -119.019676),
        new google.maps.LatLng(36.699467,  -119.01899),
        new google.maps.LatLng(36.704078,  -119.022517),
        new google.maps.LatLng(36.713597,  -119.029399),
        new google.maps.LatLng(36.723488, -119.03694),
        new google.maps.LatLng(36.735677,  -119.047864),
        new google.maps.LatLng(36.74478, -119.054747),
        new google.maps.LatLng(36.752806, -119.066368),
        new google.maps.LatLng(36.758399, -119.082561),
        new google.maps.LatLng(36.763595, -119.101813),
        new google.maps.LatLng(36.770994, -119.134008),
        new google.maps.LatLng(36.775381, -119.160571),
        new google.maps.LatLng(36.775394, -119.161217),
        new google.maps.LatLng(36.779679, -119.183459),
        new google.maps.LatLng(36.7852, -119.206948),
        new google.maps.LatLng(36.792425, -119.227085),
        new google.maps.LatLng(36.799781, -119.248839),
        new google.maps.LatLng(36.806881, -119.27017),
        new google.maps.LatLng(36.81859, -119.293528),
        new google.maps.LatLng(36.82783, -119.312728),
        new google.maps.LatLng(36.846154, -119.330822),
        new google.maps.LatLng(36.865335, -119.34122),
        new google.maps.LatLng(36.878902, -119.346335),
        new google.maps.LatLng(36.893264, -119.351672),
        new google.maps.LatLng(36.922583, -119.35662),
        new google.maps.LatLng(36.935919, -119.359209),
        new google.maps.LatLng(36.959698, -119.3629460),
        new google.maps.LatLng(36.982193, -119.367843),
        new google.maps.LatLng(37.00418, -119.374229),
        new google.maps.LatLng(37.024414, -119.388202),
        new google.maps.LatLng(37.044085, -119.402305),
        new google.maps.LatLng(37.062139, -119.415392),
        new google.maps.LatLng(37.06985, -119.428166),
        new google.maps.LatLng(37.124114, -119.452731),
        new google.maps.LatLng(37.172422, -119.47475),
        new google.maps.LatLng(37.212904, -119.495096),
        new google.maps.LatLng(37.241737, -119.516804),
        new google.maps.LatLng(37.277587, -119.543148),
        new google.maps.LatLng(37.304762, -119.570946),
        new google.maps.LatLng(37.411909, -119.689268),
        new google.maps.LatLng(37.489122, -119.766871),
        new google.maps.LatLng(37.550481, -119.850082),
      ];

      // this sets the new latlng bounds for the map
      var bounds = new google.maps.LatLngBounds();

      // this loops over all lat and lng of the overlay
      for(var i = 0; i < boundary.length; i++){
        bounds.extend(boundary[i]);
      }

      // this creates the colors of the overlay and brings in the paths
      var polygon = new google.maps.Polygon({
        paths: boundary,
        strokeColor: '#426FB5',
        strokeOpacity: 0.8,
        strokeWeight: 4,
        fillColor: 'transparent',
        fillOpacity: 0.35
      });
      // this is the sets the polygons on the map
      polygon.setMap(map);

      // this creates the map marker
      var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29),
        position: new google.maps.LatLng(36.849389, -119.795557),
        draggable: true,
      });

      var input = document.getElementById('map-input');
      var lat_val = document.getElementById('lat-input');
      var lng_val = document.getElementById('lng-input');

      // this sets the autocomplete
      var autocomplete = new google.maps.places.Autocomplete(input);

      // this sets the autocompletes of the field.
      autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);

      // this sets a  info box
      var infowindow = new google.maps.InfoWindow();

      //this sets the info content for the info box
      var infowindowContent = document.getElementById('infowindow-content');
      infowindow.setContent(infowindowContent);

      // this listens for the place changed on the input
      autocomplete.addListener('place_changed', function(){
      // infowindow.close();

      var place = autocomplete.getPlace();

      // This looks into the contains of the polygon to see if the input address is in the area of the polygon
      if(google.maps.geometry.poly.containsLocation(place.geometry.location, polygon) == false){
        // console.log('this address is out of area ' + place.name);
        errorMessage.innerText = 'This address is outside of the unWired coverage area. Please call (844) 650-FAST for a detailed review.';

        input.style.borderColor = 'red';

      }else{

        errorMessage.innerText = '';

        input.style.borderColor = '#c4c4c4';

        map.setCenter(place.geometry.location);

        map.setZoom(17);

        map.setMapTypeId('satellite');

        marker.setPosition(place.geometry.location);

        marker.setVisible(true);

        lat = marker.getPosition().lat();

        lng = marker.getPosition().lng();

        lng_val.value = lng;

        lat_val.value = lat;
      }
      });

      var markerPosition;

      google.maps.event.addListener(marker, 'dragstart', function(){

        markerPosition = this.getPosition();

      });

      google.maps.event.addListener(marker, 'dragend', function(event){

        if(google.maps.geometry.poly.containsLocation(this.getPosition(), polygon) == false){

          this.setPosition(markerPosition);

          swal("This address is outside of the unWired coverage area. Please call (844) 650-FAST for a detailed review.");

        }else{

          var geocoder = new google.maps.Geocoder();

          geocoder.geocode({latLng: marker.getPosition()}, function(result, status){

            if(status == 'OK'){
              map.setZoom(17);
              map.setCenter(result[0].geometry.location);
              marker.setPosition(result[0].geometry.location);
              map.setMapTypeId('satellite');

              errorMessage.innerText = '';

              input.style.borderColor = '#c4c4c4';
              // console.log(result[0].formatted_address);
              address = result[0].formatted_address;

              input.value = address;

              lat = marker.getPosition().lat();

              lat_val.value = lat;

              lng = marker.getPosition().lng();

              lng_val.value = lng;

              // console.log('this is the lats ' + lat);
              // console.log('this is the lngs ' + lng);

            }else{
              console.log('error');
            }

            // infowindowContent.children['place-address'].textContent = address;
            //
            // infowindow.open(map, marker);

          });
        }
      });
    }
